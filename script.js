// 手機 menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  });
});

// 動畫觸發
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('.timeline-item, .skill-card, .project-card').forEach((el) => observer.observe(el));

// Back-to-top
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

