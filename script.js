function pad(num) {
  return String(num).padStart(2, '0');
}

function createFlipAnimation(unitId, newValue) {
  const unit = document.getElementById(unitId);
  const [frontTop, backTop, frontBottom, backBottom] = unit.querySelectorAll('.card-face');

  const currentValue = frontTop.textContent;
  if (currentValue === newValue) return;

  // Set up front and back faces for flip
  frontTop.textContent = currentValue;
  frontBottom.textContent = currentValue;
  backTop.textContent = newValue;
  backBottom.textContent = newValue;

  // Reset transforms
  backTop.style.transform = 'rotateX(0deg)';
  backBottom.style.transform = 'rotateX(180deg)';

  // Animate the top flip
  backTop.style.transition = 'transform 0.5s';
  backTop.style.transform = 'rotateX(-180deg)';

  // Animate the bottom flip after a short delay
  setTimeout(() => {
    backBottom.style.transition = 'transform 0.5s';
    backBottom.style.transform = 'rotateX(0deg)';

    // After animation, sync all visible faces to new value
    setTimeout(() => {
      frontTop.textContent = newValue;
      frontBottom.textContent = newValue;
      backTop.style.transition = 'none';
      backBottom.style.transition = 'none';
    }, 500);
  }, 250);
}

function startCountdown(durationSeconds) {
  const endTime = Date.now() + durationSeconds * 1000;

  const timer = setInterval(() => {
    const now = Date.now();
    const distance = endTime - now;

    if (distance <= 0) {
      clearInterval(timer);
      createFlipAnimation("hours", "00");
      createFlipAnimation("minutes", "00");
      createFlipAnimation("seconds", "00");
      return;
    }

    const hours = Math.floor(distance / 1000 / 60 / 60);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    createFlipAnimation("hours", pad(hours));
    createFlipAnimation("minutes", pad(minutes));
    createFlipAnimation("seconds", pad(seconds));
  }, 1000);
}

// Start a 2-hour countdown
startCountdown(2 * 60 * 60);
