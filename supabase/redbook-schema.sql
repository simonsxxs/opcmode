-- opcmode 小红书图文生成器 MVP
-- 在 Supabase SQL Editor 中执行。不要把 service role key 或卡密明文写进这个文件。

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key,
  email text,
  credits integer not null default 0 check (credits >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.credit_codes (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  credits integer not null check (credits > 0),
  label text,
  expires_at timestamptz,
  redeemed_at timestamptz,
  redeemed_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.credit_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  delta integer not null,
  reason text not null,
  run_id uuid,
  code_id uuid references public.credit_codes(id) on delete set null,
  balance_after integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.redbook_sources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  source_type text not null default 'xhs_link',
  url text,
  title text,
  body text,
  tags text[] not null default '{}',
  images jsonb not null default '[]'::jsonb,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.redbook_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  action text not null check (action in ('generate', 'deconstruct', 'imitate', 'profile_advice', 'growth_plan')),
  cost integer not null check (cost >= 0),
  status text not null default 'running' check (status in ('running', 'completed', 'failed')),
  input jsonb not null default '{}'::jsonb,
  output jsonb,
  error text,
  source_id uuid references public.redbook_sources(id) on delete set null,
  image_urls text[] not null default '{}',
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists credit_codes_hash_idx on public.credit_codes(code_hash);
create index if not exists credit_transactions_user_created_idx on public.credit_transactions(user_id, created_at desc);
create index if not exists redbook_runs_user_created_idx on public.redbook_runs(user_id, created_at desc);
create index if not exists redbook_sources_user_created_idx on public.redbook_sources(user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.credit_codes enable row level security;
alter table public.credit_transactions enable row level security;
alter table public.redbook_sources enable row level security;
alter table public.redbook_runs enable row level security;

drop policy if exists "profiles select own" on public.profiles;
create policy "profiles select own"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "credit transactions select own" on public.credit_transactions;
create policy "credit transactions select own"
  on public.credit_transactions for select
  using (auth.uid() = user_id);

drop policy if exists "redbook sources select own" on public.redbook_sources;
create policy "redbook sources select own"
  on public.redbook_sources for select
  using (auth.uid() = user_id);

drop policy if exists "redbook runs select own" on public.redbook_runs;
create policy "redbook runs select own"
  on public.redbook_runs for select
  using (auth.uid() = user_id);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'redbook-images',
  'redbook-images',
  false,
  52428800,
  array['image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do nothing;

create or replace function public.redeem_redbook_code(
  p_user_id uuid,
  p_email text,
  p_code_hash text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code public.credit_codes%rowtype;
  v_balance integer;
begin
  insert into public.profiles (id, email, credits)
  values (p_user_id, p_email, 0)
  on conflict (id) do update set email = excluded.email, updated_at = now();

  select *
    into v_code
    from public.credit_codes
   where code_hash = p_code_hash
   for update;

  if not found then
    return jsonb_build_object('ok', false, 'message', '卡密不存在或已失效');
  end if;

  if v_code.redeemed_at is not null then
    return jsonb_build_object('ok', false, 'message', '这张卡密已被兑换');
  end if;

  if v_code.expires_at is not null and v_code.expires_at < now() then
    return jsonb_build_object('ok', false, 'message', '这张卡密已过期');
  end if;

  update public.profiles
     set credits = credits + v_code.credits,
         email = coalesce(p_email, email),
         updated_at = now()
   where id = p_user_id
   returning credits into v_balance;

  update public.credit_codes
     set redeemed_at = now(),
         redeemed_by = p_user_id
   where id = v_code.id;

  insert into public.credit_transactions (user_id, delta, reason, code_id, balance_after)
  values (p_user_id, v_code.credits, 'redeem_code', v_code.id, v_balance);

  return jsonb_build_object(
    'ok', true,
    'message', '卡密兑换成功',
    'added', v_code.credits,
    'credits', v_balance
  );
end;
$$;

create or replace function public.reserve_redbook_run(
  p_user_id uuid,
  p_email text,
  p_action text,
  p_cost integer,
  p_input jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_profile public.profiles%rowtype;
  v_run public.redbook_runs%rowtype;
  v_balance integer;
begin
  insert into public.profiles (id, email, credits)
  values (p_user_id, p_email, 0)
  on conflict (id) do update set email = excluded.email, updated_at = now();

  select *
    into v_profile
    from public.profiles
   where id = p_user_id
   for update;

  if v_profile.credits < p_cost then
    return jsonb_build_object(
      'ok', false,
      'message', '积分不足，请先兑换卡密',
      'credits', v_profile.credits,
      'required', p_cost
    );
  end if;

  update public.profiles
     set credits = credits - p_cost,
         updated_at = now()
   where id = p_user_id
   returning credits into v_balance;

  insert into public.redbook_runs (user_id, action, cost, status, input)
  values (p_user_id, p_action, p_cost, 'running', p_input)
  returning * into v_run;

  insert into public.credit_transactions (user_id, delta, reason, run_id, balance_after)
  values (p_user_id, -p_cost, 'reserve_run', v_run.id, v_balance);

  return jsonb_build_object(
    'ok', true,
    'profile', jsonb_build_object('id', p_user_id, 'email', p_email, 'credits', v_balance),
    'run', to_jsonb(v_run),
    'remaining', v_balance
  );
end;
$$;

create or replace function public.complete_redbook_run(
  p_user_id uuid,
  p_run_id uuid,
  p_output jsonb,
  p_image_urls text[] default '{}'
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_run public.redbook_runs%rowtype;
  v_profile public.profiles%rowtype;
begin
  select *
    into v_run
    from public.redbook_runs
   where id = p_run_id and user_id = p_user_id
   for update;

  if not found then
    return jsonb_build_object('ok', false, 'message', '生成记录不存在');
  end if;

  update public.redbook_runs
     set status = 'completed',
         output = p_output,
         image_urls = coalesce(p_image_urls, '{}'),
         error = null,
         completed_at = now()
   where id = p_run_id
   returning * into v_run;

  select * into v_profile from public.profiles where id = p_user_id;

  return jsonb_build_object(
    'ok', true,
    'profile', jsonb_build_object('id', v_profile.id, 'email', v_profile.email, 'credits', v_profile.credits),
    'run', to_jsonb(v_run)
  );
end;
$$;

create or replace function public.fail_redbook_run(
  p_user_id uuid,
  p_run_id uuid,
  p_error text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_run public.redbook_runs%rowtype;
  v_balance integer;
begin
  select *
    into v_run
    from public.redbook_runs
   where id = p_run_id and user_id = p_user_id
   for update;

  if not found then
    return jsonb_build_object('ok', false, 'message', '生成记录不存在');
  end if;

  if v_run.status = 'running' then
    update public.profiles
       set credits = credits + v_run.cost,
           updated_at = now()
     where id = p_user_id
     returning credits into v_balance;

    insert into public.credit_transactions (user_id, delta, reason, run_id, balance_after)
    values (p_user_id, v_run.cost, 'refund_failed_run', v_run.id, v_balance);
  else
    select credits into v_balance from public.profiles where id = p_user_id;
  end if;

  update public.redbook_runs
     set status = 'failed',
         error = p_error,
         completed_at = now()
   where id = p_run_id
   returning * into v_run;

  return jsonb_build_object(
    'ok', true,
    'credits', v_balance,
    'run', to_jsonb(v_run)
  );
end;
$$;
