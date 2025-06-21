function flipCard(unit, newValue) {
  const flipUnit = document.getElementById(unit);
  const upperCard = flipUnit.querySelector('.upper-card');
  const lowerCard = flipUnit.querySelector('.lower-card');

  if (upperCard.textContent === newValue) return;

  const oldValue = upperCard.textContent;
  lowerCard.textContent = newValue;
  flipUnit.classList.add('flip');

  setTimeout(() => {
    upperCard.textContent = newValue;
    flipUnit.classList.remove('flip');
  }, 700);
}

function updateCountdown() {
  const endTime = new Date().getTime() + (2 * 60 * 60 * 1000); // 2-hour countdown
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    flipCard('hours', String(hours).padStart(2, '0'));
    flipCard('minutes', String(minutes).padStart(2, '0'));
    flipCard('seconds', String(seconds).padStart(2, '0'));

    if (distance <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

updateCountdown();
