function pad(n) {
  return String(n).padStart(2, '0');
}

function updateUnit(unitId, value) {
  const unit = document.getElementById(unitId);
  const top = unit.querySelector('.top');
  const bottom = unit.querySelector('.bottom');

  if (top.textContent === value) return;

  top.textContent = value;
  bottom.textContent = value;

  const card = unit.querySelector('.card');
  card.classList.add('flip');

  setTimeout(() => {
    card.classList.remove('flip');
  }, 600);
}

function startCountdown(seconds) {
  const end = Date.now() + seconds * 1000;

  const interval = setInterval(() => {
    const remaining = Math.max(0, Math.floor((end - Date.now()) / 1000));
    const hrs = Math.floor(remaining / 3600);
    const mins = Math.floor((remaining % 3600) / 60);
    const secs = remaining % 60;

    updateUnit('hours', pad(hrs));
    updateUnit('minutes', pad(mins));
    updateUnit('seconds', pad(secs));

    if (remaining <= 0) clearInterval(interval);
  }, 1000);
}

startCountdown(2 * 60 * 60); // 2 hours
