// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
});

// Clay Talk Auto
const bubble = document.getElementById('clayTalk');
const messages = [
  "Kontenmu gampang dilupakan...",
  "Visual terlalu biasa.",
  "Claymation bikin cerita hidup.",
  "Orang berhenti scroll.",
  "Dan akhirnya... cuan."
];

let i = 0;

setInterval(() => {
  bubble.textContent = messages[i];
  i = (i + 1) % messages.length;
}, 2500);

// Countdown 48 jam
const countdownEl = document.getElementById("countdown");

let endTime = localStorage.getItem("slotEndTime");

if (!endTime) {
  endTime = new Date().getTime() + (48 * 60 * 60 * 1000);
  localStorage.setItem("slotEndTime", endTime);
}

setInterval(() => {
  const now = new Date().getTime();
  const distance = endTime - now;

  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);

  countdownEl.innerHTML = hours + "j " + minutes + "m " + seconds + "d";
}, 1000);
