function showProgress(message, maxDots = 50) {
  process.stdout.write(message + " ");
  let dotCounter = 0;

  const interval = setInterval(() => {
    if (dotCounter < maxDots) {
      process.stdout.write(".");
      dotCounter++;
    } else {
      clearInterval(interval);
    }
  }, 500);

  return interval;
}

module.exports = showProgress;
