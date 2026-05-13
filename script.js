/* ===================================================
   AJ LEE — PORTFOLIO SCRIPTS
   Nav scroll, active link, hamburger, scroll reveal
=================================================== */

const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');
const navLinks  = document.querySelectorAll('.nav-links a');
const sections  = document.querySelectorAll('section[id]');

// ----- Nav: add background on scroll -----
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ----- Nav: active link highlighting -----
const activeLinkObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { rootMargin: '-38% 0px -58% 0px' });

sections.forEach(s => activeLinkObserver.observe(s));

// ----- Hamburger menu -----
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ----- Scroll reveal -----
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
