function showProgress(message, maxDots = 50) {
  process.stdout.write("\x1b[90m" + message + "\x1b[0m" + " ");
  let dotCounter = 0;

  const interval = setInterval(() => {
    if (dotCounter < maxDots) {
      process.stdout.write("\x1b[90m" + "." + "\x1b[0m");
      dotCounter++;
    } else {
      clearInterval(interval);
    }
  }, 500);

  return interval;
}

module.exports = showProgress;
