function pad2(num) {
  return String(num).padStart(2, '0');
}

function flipDigit(id, newDigit) {
  const digit = document.getElementById(id);
  const top = digit.querySelector('.top');
  const bottom = digit.querySelector('.bottom');

  if (top.textContent === newDigit) return;

  const oldDigit = top.textContent;
  top.textContent = oldDigit;
  bottom.textContent = newDigit;

  top.classList.add('animate');
  bottom.classList.add('animate');

  setTimeout(() => {
    top.textContent = newDigit;
    top.classList.remove('animate');
    bottom.classList.remove('animate');
  }, 1000);
}

function updateClock(h, m, s) {
  const [h1, h2] = pad2(h);
  const [m1, m2] = pad2(m);
  const [s1, s2] = pad2(s);

  flipDigit('h1', h1);
  flipDigit('h2', h2);
  flipDigit('m1', m1);
  flipDigit('m2', m2);
  flipDigit('s1', s1);
  flipDigit('s2', s2);
}

function startCountdown(durationSeconds) {
  let remaining = durationSeconds;

  const timer = setInterval(() => {
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    updateClock(hours, minutes, seconds);

    if (remaining <= 0) clearInterval(timer);
    remaining--;
  }, 1000);
}

// Start 2 hour countdown
startCountdown(2 * 60 * 60);
