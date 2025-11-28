function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}

// example usage:
timer(1000, (msg) => {
  console.log(msg);
});
