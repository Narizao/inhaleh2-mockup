/* InhaleH2 Mockup — light interactivity for demo purposes only */

(function () {
  // Mini-cart toggle
  const openers = document.querySelectorAll('[data-cart-open]');
  const closers = document.querySelectorAll('[data-cart-close]');
  const minicart = document.querySelector('.minicart');
  const overlay  = document.querySelector('.minicart-overlay');
  function setOpen(open) {
    if (!minicart) return;
    minicart.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  openers.forEach(b => b.addEventListener('click', e => { e.preventDefault(); setOpen(true); }));
  closers.forEach(b => b.addEventListener('click', e => { e.preventDefault(); setOpen(false); }));

  // PDP — gallery thumbs
  const thumbs = document.querySelectorAll('.gallery-thumbs button');
  const main   = document.querySelector('.gallery-main img');
  thumbs.forEach(t => t.addEventListener('click', () => {
    thumbs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    if (main) main.src = t.dataset.full;
  }));

  // PDP — variants
  document.querySelectorAll('.variant-options').forEach(group => {
    group.querySelectorAll('.variant').forEach(v => v.addEventListener('click', () => {
      group.querySelectorAll('.variant').forEach(x => x.classList.remove('selected'));
      v.classList.add('selected');
    }));
  });

  // PDP — quantity
  document.querySelectorAll('.qty').forEach(qty => {
    const minus = qty.querySelector('[data-qty-minus]');
    const plus  = qty.querySelector('[data-qty-plus]');
    const val   = qty.querySelector('.val');
    minus && minus.addEventListener('click', () => { val.textContent = Math.max(1, parseInt(val.textContent) - 1); });
    plus  && plus.addEventListener('click', () => { val.textContent = parseInt(val.textContent) + 1; });
  });

  // Audience toggle (B2C / B2B) — visual only
  document.querySelectorAll('.audience-toggle button').forEach(b => {
    b.addEventListener('click', () => {
      b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      const target = b.dataset.target;
      if (target) window.location.href = target;
    });
  });
})();
