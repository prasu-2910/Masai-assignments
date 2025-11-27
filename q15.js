let seconds = Number(prompt("Enter number of seconds to count down:"));

 
let intervalId = setInterval(() => {
  console.log("Remaining time:", seconds, "s");
  seconds--;

  
  if (seconds < 0) {
    clearInterval(intervalId);
    console.log("Countdown Complete");
  }
}, 1000);


function checkForStop() {

  const input = prompt("Press 's' to stop countdown (or Cancel to continue):");

  if (input === "s") {
    clearInterval(intervalId);
    console.log("Countdown Stopped by User");
  } else if (seconds >= 0) {

    setTimeout(checkForStop, 1000);
  }
}


setTimeout(checkForStop, 1000);
