// 🎉 Confetti colors
const colors = ['#ff6fb0', '#ffcc70', '#70e1f5', '#d4fc79', '#ffa3a3'];
const body = document.body;

// 🎊 Create falling confetti
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.animationDuration = 3 + Math.random() * 2 + 's';
  body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}
setInterval(createConfetti, 200);

// 🎁 Surprise click — burst confetti
document.getElementById('surpriseBtn').addEventListener('click', () => {
  for (let i = 0; i < 80; i++) {
    createConfetti();
  }
  alert('🎂 Surprise!  Happy 9Th Birthday Vaishnavi! 💖🎈');
  alert('🎂 Enjoy today  and always! 💖🎈');
  alert('🎂 your sweet words bicha, chaketu, tha, daddy pappa, baku , va , ja , egg, ishia , babithicha  and many more ..');
  alert('🎂 Love you so so so much .. i wowwu  💖🎈');
  
});
