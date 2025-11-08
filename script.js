// Confetti animation 🎊
const colors = ['#ff6fb0', '#ffcc70', '#70e1f5', '#d4fc79', '#ffa3a3'];
const body = document.body;

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.animationDuration = 3 + Math.random() * 2 + 's';
  body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}
setInterval(createConfetti, 150);
