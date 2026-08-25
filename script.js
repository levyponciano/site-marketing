const reveals = document.querySelectorAll('.reveal');
const header = document.querySelector('.site-header');

const updateHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 2) * 70}ms`;
  observer.observe(element);
});

const cursor = document.querySelector('.cursor-dot');
window.addEventListener('pointermove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
document.querySelectorAll('a, button').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.style.width = '28px';
    cursor.style.height = '28px';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.width = '11px';
    cursor.style.height = '11px';
  });
});

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.textContent = isOpen ? 'Menu' : 'Fechar';
  document.querySelector('.desktop-nav').classList.toggle('mobile-open', !isOpen);
});
