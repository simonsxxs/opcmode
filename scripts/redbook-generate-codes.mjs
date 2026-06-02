#!/usr/bin/env node
import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'

function parseArgs(argv) {
  const args = {
    count: 20,
    credits: 100,
    label: 'redbook-pack',
    out: '',
    push: false,
    expiresAt: '',
  }

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i]
    const next = argv[i + 1]
    if (key === '--count') args.count = Number(next)
    if (key === '--credits') args.credits = Number(next)
    if (key === '--label') args.label = next
    if (key === '--out') args.out = next
    if (key === '--push') args.push = true
    if (key === '--expires-at') args.expiresAt = next
    if (key !== '--push') i += 1
  }

  if (!Number.isInteger(args.count) || args.count <= 0) throw new Error('--count 必须是正整数')
  if (!Number.isInteger(args.credits) || args.credits <= 0) throw new Error('--credits 必须是正整数')
  return args
}

function normalizeCode(code) {
  return code.trim().toUpperCase().replace(/\s+/g, '')
}

function hashCode(code, pepper) {
  return crypto.createHash('sha256').update(`${normalizeCode(code)}:${pepper}`).digest('hex')
}

function makeCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const bytes = crypto.randomBytes(12)
  const chars = Array.from(bytes, (byte) => alphabet[byte % alphabet.length])
  return `OPC-${chars.slice(0, 4).join('')}-${chars.slice(4, 8).join('')}-${chars.slice(8, 12).join('')}`
}

async function pushRows(rows) {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '')
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('--push 需要 SUPABASE_URL 和 SUPABASE_SERVICE_ROLE_KEY')

  const response = await fetch(`${url}/rest/v1/credit_codes`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=ignore-duplicates',
    },
    body: JSON.stringify(rows.map((row) => row.db)),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Supabase 写入失败：${response.status} ${text}`)
  }
}

const args = parseArgs(process.argv.slice(2))
const pepper = process.env.CARD_CODE_PEPPER
if (!pepper) throw new Error('缺少 CARD_CODE_PEPPER。请只在本地 shell 或 Vercel env 中配置，不要提交。')

const seen = new Set()
const rows = []
while (rows.length < args.count) {
  const code = makeCode()
  if (seen.has(code)) continue
  seen.add(code)
  rows.push({
    code,
    credits: args.credits,
    label: args.label,
    db: {
      code_hash: hashCode(code, pepper),
      credits: args.credits,
      label: args.label,
      expires_at: args.expiresAt || null,
    },
  })
}

if (args.push) await pushRows(rows)

const outPath = args.out || path.join('/tmp', `redbook-codes-${Date.now()}.csv`)
const csv = [
  'code,credits,label,expires_at',
  ...rows.map((row) => `${row.code},${row.credits},${row.label},${args.expiresAt || ''}`),
].join('\n')

await fs.writeFile(outPath, `${csv}\n`, 'utf8')

console.log(`generated=${rows.length}`)
console.log(`credits_each=${args.credits}`)
console.log(`pushed=${args.push ? 'yes' : 'no'}`)
console.log(`codes_csv=${outPath}`)
