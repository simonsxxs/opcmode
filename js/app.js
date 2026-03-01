// One Person Business Hub - Main Application

const SECTION_CONFIG = {
    youtube: {
        file: 'data/youtube_tutorials.json',
        gridId: 'youtube-grid',
        countId: 'youtube-count',
        label: 'YOUTUBE',
        badgeClass: 'bg-red-100 text-red-700',
        linkClass: 'text-red-700 hover:text-red-900',
        buttonText: '打开教程'
    },
    x: {
        file: 'data/x_content.json',
        gridId: 'x-grid',
        countId: 'x-count',
        label: 'X',
        badgeClass: 'bg-sky-100 text-sky-700',
        linkClass: 'text-sky-700 hover:text-sky-900',
        buttonText: '查看内容'
    },
    github: {
        file: 'data/github_resources.json',
        gridId: 'github-grid',
        countId: 'github-count',
        label: 'GITHUB',
        badgeClass: 'bg-gray-100 text-gray-700',
        linkClass: 'text-gray-700 hover:text-gray-900',
        buttonText: '打开仓库/搜索'
    }
};

function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!menuBtn || !menu) return;

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
        });
    });
}

function renderCard(item, config) {
    const tags = Array.isArray(item.tags) ? item.tags.slice(0, 4) : [];

    return `
        <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs px-2 py-1 rounded-full ${config.badgeClass}">${config.label}</span>
                <span class="text-xs text-gray-500">${item.author || 'Unknown'}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">${item.title || 'Untitled'}</h3>
            <p class="text-sm text-gray-600 mb-4">${item.summary || ''}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${tags.map((tag) => `<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">#${tag}</span>`).join('')}
            </div>
            <a class="inline-flex items-center text-sm font-medium ${config.linkClass}"
               href="${item.url || '#'}"
               target="_blank"
               rel="noopener noreferrer">
               ${config.buttonText}
            </a>
        </article>
    `;
}

async function loadSection(config) {
    const grid = document.getElementById(config.gridId);
    const count = document.getElementById(config.countId);
    if (!grid || !count) return;

    try {
        const response = await fetch(config.file);
        if (!response.ok) throw new Error(`Failed to load ${config.file}`);

        const data = await response.json();
        const items = Array.isArray(data.items) ? data.items : [];
        count.textContent = String(items.length);

        if (items.length === 0) {
            grid.innerHTML = '<p class="col-span-full text-center text-gray-500">暂无数据</p>';
            return;
        }

        grid.innerHTML = items.map((item) => renderCard(item, config)).join('');
    } catch (error) {
        console.error(error);
        grid.innerHTML = '<p class="col-span-full text-center text-red-500">加载失败，请稍后重试</p>';
        count.textContent = '--';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    setupMobileMenu();
    setupSmoothScroll();

    await Promise.all([
        loadSection(SECTION_CONFIG.youtube),
        loadSection(SECTION_CONFIG.x),
        loadSection(SECTION_CONFIG.github)
    ]);
});
