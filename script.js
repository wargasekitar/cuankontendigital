const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = '0.6s ease';
    }
  });
});
