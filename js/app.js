const FILES = {
  tutorial: 'data/system_tutorial.json',
  youtube: 'data/youtube_tutorials.json',
  x: 'data/x_content.json',
  github: 'data/github_resources.json'
};

const siteConfig = {
  wechat: {
    id: 'simonsxx1',
    qrImage: 'assets/wechat-qr.svg',
    ctaText: '扫码或复制后到微信添加'
  }
};

let state = {
  modules: [],
  filteredModules: [],
  currentModule: null,
  youtube: [],
  x: [],
  github: [],
  activeTab: 'steps'
};

function getProgressMap() {
  try {
    return JSON.parse(localStorage.getItem('opc_progress') || '{}');
  } catch {
    return {};
  }
}

function setProgress(moduleId, done) {
  const data = getProgressMap();
  data[moduleId] = done;
  localStorage.setItem('opc_progress', JSON.stringify(data));
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = String(value);
}

function showToast(message) {
  const toast = document.getElementById('copy-toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timerId);
  showToast.timerId = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }

  document.body.removeChild(textarea);
  return ok;
}

async function copyWechatId() {
  const id = siteConfig.wechat.id;
  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(id);
      copied = true;
    } catch {
      copied = false;
    }
  }

  if (!copied) {
    copied = fallbackCopyText(id);
  }

  if (copied) {
    showToast(`微信号已复制：${id}`);
  } else {
    showToast(`复制失败，请手动复制：${id}`);
  }
}

function setupWechatLead() {
  document.querySelectorAll('[data-wechat-id]').forEach((node) => {
    node.textContent = siteConfig.wechat.id;
  });

  document.querySelectorAll('[data-copy-wechat]').forEach((button) => {
    button.addEventListener('click', copyWechatId);
  });

  document.querySelectorAll('[data-wechat-qr]').forEach((img) => {
    img.src = siteConfig.wechat.qrImage;
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.nextElementSibling;
      if (fallback && fallback.classList.contains('qr-fallback')) {
        fallback.style.display = 'block';
      }
    });
  });

  const heroQr = document.getElementById('hero-qr');
  const heroToggle = document.getElementById('hero-qr-toggle');
  if (heroQr && heroToggle) {
    heroToggle.addEventListener('click', () => {
      heroQr.classList.toggle('open');
    });
  }

  const floatToggle = document.getElementById('wechat-float-toggle');
  const floatPanel = document.getElementById('wechat-float-panel');
  if (floatToggle && floatPanel) {
    floatToggle.addEventListener('click', () => {
      floatPanel.classList.toggle('open');
    });
  }
}

function setupHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  if (slides.length <= 1) return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let currentIndex = 0;
  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 6000);
}

async function fetchJson(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function renderMaterialCard(item, type) {
  const desc = item.transcript_excerpt || item.text_excerpt || item.summary || item.description || '';
  const mainLinkText = type === 'github' ? '打开项目' : (type === 'youtube' ? '打开视频' : '打开 X');

  return `
    <article class="material">
      <h4>${item.title || 'Untitled'}</h4>
      <div class="meta">${item.author || 'Unknown'}</div>
      <div class="desc">${desc}</div>
      <div class="links">
        <a class="link" href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">${mainLinkText}</a>
        ${item.source ? `<a class="link" href="${item.source}" target="_blank" rel="noopener noreferrer">文本来源</a>` : ''}
      </div>
    </article>
  `;
}

function renderMaterials() {
  document.getElementById('youtube-list').innerHTML = state.youtube.map((x) => renderMaterialCard(x, 'youtube')).join('');
  document.getElementById('x-list').innerHTML = state.x.map((x) => renderMaterialCard(x, 'x')).join('');
  document.getElementById('github-list').innerHTML = state.github.map((x) => renderMaterialCard(x, 'github')).join('');

  setText('youtube-count', state.youtube.length);
  setText('x-count', state.x.length);
  setText('github-count', state.github.length);
}

function createModuleTabHtml(module) {
  if (!module) return '<p class="desc">未选择模块</p>';

  if (state.activeTab === 'steps') {
    const steps = (module.lessons || []).map((step) => `<li>${step}</li>`).join('');
    return `<ol class="steps">${steps}</ol>`;
  }

  if (state.activeTab === 'deliverable') {
    return `<div class="deliverable">${module.deliverable || '暂无交付物'}</div>`;
  }

  const sourceRefs = Array.isArray(module.source_refs) ? module.source_refs : [];
  if (sourceRefs.length === 0) {
    return '<div class="desc">暂无来源映射</div>';
  }

  return `
    <div class="deliverable">
      <strong>来源引用 ID</strong>
      <ul class="steps" style="margin-top:8px;">
        ${sourceRefs.map((id) => `<li><code>${id}</code></li>`).join('')}
      </ul>
    </div>
  `;
}

function setActiveModule(module) {
  state.currentModule = module;

  setText('module-title', module.title || 'Untitled');
  setText('module-id', module.id || '-');
  setText('module-goal', module.goal || '');

  document.getElementById('module-tab-content').innerHTML = createModuleTabHtml(module);

  const progress = getProgressMap();
  const done = Boolean(progress[module.id]);
  const doneCheckbox = document.getElementById('module-done');
  doneCheckbox.checked = done;
  doneCheckbox.onchange = () => setProgress(module.id, doneCheckbox.checked);

  document.querySelectorAll('.module-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.id === module.id);
  });
}

function renderModuleNav() {
  const container = document.getElementById('module-nav');
  const progress = getProgressMap();

  if (!state.filteredModules.length) {
    container.innerHTML = '<p class="kicker">没有匹配结果</p>';
    return;
  }

  container.innerHTML = state.filteredModules.map((module, index) => `
    <button class="module-btn ${state.currentModule?.id === module.id ? 'active' : ''}" data-id="${module.id}">
      <small>Module ${index + 1} ${progress[module.id] ? '· 已完成' : ''}</small>
      <strong>${module.title}</strong>
    </button>
  `).join('');

  container.querySelectorAll('.module-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const found = state.modules.find((m) => m.id === button.dataset.id);
      if (found) setActiveModule(found);
    });
  });
}

function applySearch(keyword) {
  const q = keyword.trim().toLowerCase();

  if (!q) {
    state.filteredModules = [...state.modules];
  } else {
    state.filteredModules = state.modules.filter((module) => {
      const text = [module.title, module.goal, ...(module.lessons || []), module.deliverable]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return text.includes(q);
    });
  }

  renderModuleNav();

  if (!state.filteredModules.find((m) => m.id === state.currentModule?.id) && state.filteredModules[0]) {
    setActiveModule(state.filteredModules[0]);
  }
}

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach((el) => {
        el.classList.toggle('active', el.dataset.tab === state.activeTab);
      });
      document.getElementById('module-tab-content').innerHTML = createModuleTabHtml(state.currentModule);
    });
  });
}

async function init() {
  try {
    setupWechatLead();
    setupHeroCarousel();

    const [tutorial, youtube, xData, github] = await Promise.all([
      fetchJson(FILES.tutorial),
      fetchJson(FILES.youtube),
      fetchJson(FILES.x),
      fetchJson(FILES.github)
    ]);

    state.modules = tutorial.modules || [];
    state.filteredModules = [...state.modules];
    state.youtube = youtube.items || [];
    state.x = xData.items || [];
    state.github = github.items || [];

    setText('module-count', state.modules.length);
    renderMaterials();

    setupTabs();
    renderModuleNav();

    if (state.filteredModules[0]) {
      setActiveModule(state.filteredModules[0]);
    }

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => applySearch(searchInput.value));
  } catch (error) {
    console.error(error);
    setText('module-title', '加载失败');
    setText('module-goal', '请检查数据文件是否存在且格式正确。');
  }
}

document.addEventListener('DOMContentLoaded', init);
