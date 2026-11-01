export function initNavigation() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    header.classList.toggle('scrolled', currentScrollY > 50);
    header.classList.toggle('hidden', currentScrollY > lastScrollY && currentScrollY > 100);
    lastScrollY = currentScrollY;
  });

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}