'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 700px)');
document.documentElement.classList.add('js-menu');
toggle.hidden = false;
function closeMenu(restoreFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
  document.body.classList.remove('menu-open');
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open && mobile.matches);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (toggle.getAttribute('aria-expanded') !== 'true' || !mobile.matches) return;
  if (event.key === 'Escape') closeMenu(true);
  if (event.key === 'Tab') {
    const links = [...navigation.querySelectorAll('a')];
    if (event.shiftKey && document.activeElement === toggle) {
      event.preventDefault(); links.at(-1).focus();
    } else if (!event.shiftKey && document.activeElement === links.at(-1)) {
      event.preventDefault(); toggle.focus();
    }
  }
});
mobile.addEventListener('change', () => closeMenu());
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
const copyButton = document.querySelector('.copy-phone');
const copyStatus = document.querySelector('#copy-status');
copyButton.hidden = false;
let statusTimer;
copyButton.addEventListener('click', async () => {
  clearTimeout(statusTimer);
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText('661 634 663');
    } else {
      const field = document.createElement('textarea');
      field.value = '661 634 663';
      field.setAttribute('aria-label', 'Número de teléfono');
      field.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      copyButton.focus();
      if (!copied) throw new Error('Copia no disponible');
    }
    copyStatus.textContent = 'Número copiado: 661 634 663';
  } catch {
    copyStatus.textContent = 'Puedes copiar el número manualmente: 661 634 663';
  }
  statusTimer = setTimeout(() => { copyStatus.textContent = ''; }, 6000);
});
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('waiting');
    observer.observe(element);
  });
}
