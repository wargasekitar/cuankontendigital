// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// Clay stop-motion micro jitter
setInterval(() => {
  document.querySelectorAll('.clay').forEach(el => {
    const x = (Math.random() - 0.5) * 1.5;
    const y = (Math.random() - 0.5) * 1.5;
    el.style.transform += ` translate(${x}px,${y}px)`;
  });
}, 600);

// Stop-motion feel (intentional frame delay)
document.querySelectorAll('.clay').forEach(el => {
  setInterval(() => {
    el.style.transition = 'none';
    setTimeout(() => {
      el.style.transition = 'transform .3s ease';
    }, 80);
  }, 700);
});
