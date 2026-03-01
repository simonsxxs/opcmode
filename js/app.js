const FILES = {
    tutorial: 'data/system_tutorial.json',
    youtube: 'data/youtube_tutorials.json',
    x: 'data/x_content.json',
    github: 'data/github_resources.json'
};

function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!menuBtn || !menu) return;
    menuBtn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.getElementById('mobile-menu')?.classList.add('hidden');
            }
        });
    });
}

async function fetchJson(path) {
    const resp = await fetch(path);
    if (!resp.ok) throw new Error(`Failed to load ${path}`);
    return resp.json();
}

function renderTutorialModules(modules) {
    const container = document.getElementById('tutorial-grid');
    const count = document.getElementById('module-count');
    if (!container || !count) return;

    count.textContent = String(modules.length || 0);

    if (!modules.length) {
        container.innerHTML = '<p class="col-span-full text-center text-slate-500">暂无教程模块</p>';
        return;
    }

    container.innerHTML = modules.map((m, idx) => `
        <article class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-semibold px-2 py-1 rounded bg-indigo-100 text-indigo-700">MODULE ${idx + 1}</span>
                <span class="text-xs text-slate-500">${m.id || ''}</span>
            </div>
            <h3 class="text-xl font-bold mb-2">${m.title || ''}</h3>
            <p class="text-slate-700 mb-4">${m.goal || ''}</p>
            <h4 class="font-semibold text-slate-900 mb-2">学习步骤</h4>
            <ol class="list-decimal list-inside space-y-1 text-sm text-slate-700 mb-4">
                ${(m.lessons || []).map((l) => `<li>${l}</li>`).join('')}
            </ol>
            <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm">
                <span class="font-semibold">本模块交付物：</span>${m.deliverable || ''}
            </div>
        </article>
    `).join('');
}

function renderYoutubeText(items) {
    const container = document.getElementById('youtube-text-grid');
    const count = document.getElementById('youtube-count');
    if (!container || !count) return;

    count.textContent = String(items.length || 0);
    if (!items.length) {
        container.innerHTML = '<p class="col-span-full text-center text-slate-500">暂无 YouTube 文本</p>';
        return;
    }

    container.innerHTML = items.map((it) => `
        <article class="bg-white border border-red-200 rounded-xl p-5">
            <div class="text-xs text-red-700 font-semibold mb-2">YouTube 转文本</div>
            <h3 class="font-bold mb-2">${it.title || ''}</h3>
            <p class="text-xs text-slate-500 mb-3">作者：${it.author || 'Unknown'}</p>
            <p class="text-sm text-slate-700 mb-3"><span class="font-semibold">文本摘录：</span>${it.transcript_excerpt || ''}</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mb-3">
                ${(it.key_points || []).map((p) => `<li>${p}</li>`).join('')}
            </ul>
            <p class="text-sm text-slate-900 mb-3"><span class="font-semibold">行动：</span>${it.action || ''}</p>
            <div class="flex gap-3 text-sm">
                <a href="${it.url || '#'}" target="_blank" rel="noopener noreferrer" class="text-red-700 hover:text-red-900">视频链接</a>
                <a href="${it.source || '#'}" target="_blank" rel="noopener noreferrer" class="text-slate-700 hover:text-slate-900">文本来源</a>
            </div>
        </article>
    `).join('');
}

function renderXText(items) {
    const container = document.getElementById('x-text-grid');
    const count = document.getElementById('x-count');
    if (!container || !count) return;

    count.textContent = String(items.length || 0);
    if (!items.length) {
        container.innerHTML = '<p class="col-span-full text-center text-slate-500">暂无 X 文本</p>';
        return;
    }

    container.innerHTML = items.map((it) => `
        <article class="bg-white border border-sky-200 rounded-xl p-5">
            <div class="text-xs text-sky-700 font-semibold mb-2">X 转文本</div>
            <h3 class="font-bold mb-2">${it.title || ''}</h3>
            <p class="text-xs text-slate-500 mb-3">作者：${it.author || 'Unknown'}</p>
            <p class="text-sm text-slate-700 mb-3"><span class="font-semibold">文本摘录：</span>${it.text_excerpt || ''}</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mb-3">
                ${(it.insights || []).map((p) => `<li>${p}</li>`).join('')}
            </ul>
            <p class="text-sm text-slate-900 mb-3"><span class="font-semibold">行动：</span>${it.action || ''}</p>
            <div class="flex gap-3 text-sm">
                <a href="${it.url || '#'}" target="_blank" rel="noopener noreferrer" class="text-sky-700 hover:text-sky-900">X 链接</a>
                <a href="${it.source || '#'}" target="_blank" rel="noopener noreferrer" class="text-slate-700 hover:text-slate-900">文本来源</a>
            </div>
        </article>
    `).join('');
}

function renderGithub(items) {
    const container = document.getElementById('github-grid');
    const count = document.getElementById('github-count');
    if (!container || !count) return;

    count.textContent = String(items.length || 0);
    if (!items.length) {
        container.innerHTML = '<p class="col-span-full text-center text-slate-500">暂无 GitHub 资源</p>';
        return;
    }

    container.innerHTML = items.map((it) => `
        <article class="bg-white border border-gray-200 rounded-xl p-5">
            <h3 class="font-bold mb-2">${it.title || ''}</h3>
            <p class="text-xs text-slate-500 mb-3">${it.author || 'Unknown'}</p>
            <p class="text-sm text-slate-700 mb-3">${it.summary || ''}</p>
            <div class="flex flex-wrap gap-2 mb-3">
                ${(it.tags || []).map((tag) => `<span class="text-xs bg-slate-100 px-2 py-1 rounded">#${tag}</span>`).join('')}
            </div>
            <a href="${it.url || '#'}" target="_blank" rel="noopener noreferrer" class="text-gray-800 hover:text-black text-sm">打开链接</a>
        </article>
    `).join('');
}

async function init() {
    setupMobileMenu();
    setupSmoothScroll();

    try {
        const [tutorial, youtube, xData, github] = await Promise.all([
            fetchJson(FILES.tutorial),
            fetchJson(FILES.youtube),
            fetchJson(FILES.x),
            fetchJson(FILES.github)
        ]);

        renderTutorialModules(tutorial.modules || []);
        renderYoutubeText(youtube.items || []);
        renderXText(xData.items || []);
        renderGithub(github.items || []);
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', init);
