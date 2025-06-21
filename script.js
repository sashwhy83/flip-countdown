function pad(num) {
  return String(num).padStart(2, '0');
}

function flip(unitId, newValue) {
  const unit = document.getElementById(unitId);
  const top = unit.querySelector('.top');
  const bottom = unit.querySelector('.bottom');
  const flipTop = unit.querySelector('.flip-top');
  const flipBottom = unit.querySelector('.flip-bottom');

  if (top.textContent === newValue) return;

  flipTop.textContent = top.textContent;
  flipBottom.textContent = newValue;

  flipTop.classList.add('animate');
  flipBottom.classList.add('animate');

  setTimeout(() => {
    top.textContent = newValue;
    bottom.textContent = newValue;
    flipTop.classList.remove('animate');
    flipBottom.classList.remove('animate');
  }, 1000);
}

function startCountdown(secondsLeft) {
  const end = Date.now() + secondsLeft * 1000;

  const timer = setInterval(() => {
    const now = Date.now();
    const distance = Math.max(0, end - now);

    const hours = Math.floor(distance / 1000 / 60 / 60);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    flip('hours', pad(hours));
    flip('minutes', pad(minutes));
    flip('seconds', pad(seconds));

    if (distance <= 0) clearInterval(timer);
  }, 1000);
}

startCountdown(2 * 60 * 60); // 2 hour countdown
