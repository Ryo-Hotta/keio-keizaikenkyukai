/* ============================================
   慶應経済研究会 - 共通JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- モバイルメニュー ---
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  let menuOpen = false;

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open');
      menuIcon.textContent = menuOpen ? '\u2715' : '\u2630';
    });
  }

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
      if (menuIcon) menuIcon.textContent = '\u2630';
      menuOpen = false;
    });
  });

  // --- スクロールフェードイン ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // --- ナビ背景スクロール変化 ---
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(13, 27, 42, 1)';
      } else {
        nav.style.backgroundColor = 'rgba(13, 27, 42, 0.95)';
      }
    });
  }

});
