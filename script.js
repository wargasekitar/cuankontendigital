// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
});

// Clay Talk Scroll-Aware
const bubble = document.getElementById('clayTalk');
const sections = document.querySelectorAll('section');

const messages = [
  "Kontenmu gampang dilupakan...",
  "Visualnya terlalu biasa.",
  "Claymation bikin cerita hidup.",
  "Orang berhenti scroll.",
  "Dan akhirnya... cuan."
];

window.addEventListener('scroll', () => {
  let current = 0;

  sections.forEach((sec, i) => {
    if (sec.getBoundingClientRect().top < window.innerHeight / 2) {
      current = i;
    }
  });

  if (messages[current]) {
    bubble.textContent = messages[current];
  }
});
// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
});

// Clay Talk Scroll-Aware
const bubble = document.getElementById('clayTalk');
const sections = document.querySelectorAll('section');

const messages = [
  "Kontenmu gampang dilupakan...",
  "Visualnya terlalu biasa.",
  "Claymation bikin cerita hidup.",
  "Orang berhenti scroll.",
  "Dan akhirnya... cuan."
];

window.addEventListener('scroll', () => {
  let current = 0;
  sections.forEach((sec,i)=>{
    if(sec.getBoundingClientRect().top < window.innerHeight/2){
      current = i;
    }
  });
  if(messages[current]){
    bubble.textContent = messages[current];
  }
});

// Countdown 48 jam
const countdownEl = document.getElementById("countdown");

if(countdownEl){
  let endTime = localStorage.getItem("slotEndTime");

  if(!endTime){
    endTime = new Date().getTime() + (48*60*60*1000);
    localStorage.setItem("slotEndTime", endTime);
  }

  const timer = setInterval(()=>{
    const now = new Date().getTime();
    const distance = endTime - now;

    if(distance <= 0){
      clearInterval(timer);
      countdownEl.innerHTML = "Slot hampir habis!";
      return;
    }

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    countdownEl.innerHTML = hours+"j "+minutes+"m "+seconds+"d";
  },1000);
}

// Popup once
if(!localStorage.getItem("popupShown")){
  setTimeout(()=>{
    document.getElementById("popup").style.display="flex";
    localStorage.setItem("popupShown", true);
  },4000);
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}

// Track klik order
document.querySelectorAll("a[href*='lynk.id']").forEach(btn=>{
  btn.addEventListener("click",()=>{
    console.log("Order Clicked");
  });
});
