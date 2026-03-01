(function () {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  let active = 0;

  if (slides.length > 1) {
    setInterval(() => {
      slides[active].classList.remove('active');
      active = (active + 1) % slides.length;
      slides[active].classList.add('active');
    }, 2800);
  }

  const copyBtn = document.getElementById('copyWechatBtn');
  const wechatEl = document.getElementById('wechatId');
  const hintEl = document.getElementById('copyHint');

  if (!copyBtn || !wechatEl || !hintEl) {
    return;
  }

  const wechat = wechatEl.textContent.trim();
  const defaultHint = hintEl.textContent;

  async function copyWechat() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(wechat);
      } else {
        const input = document.createElement('textarea');
        input.value = wechat;
        input.style.position = 'fixed';
        input.style.left = '-9999px';
        document.body.appendChild(input);
        input.focus();
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }

      hintEl.textContent = '已复制：' + wechat;
      copyBtn.textContent = '复制成功';
      setTimeout(() => {
        hintEl.textContent = defaultHint;
        copyBtn.textContent = '复制微信号';
      }, 1800);
    } catch (err) {
      hintEl.textContent = '复制失败，请手动添加：' + wechat;
    }
  }

  copyBtn.addEventListener('click', copyWechat);
})();
