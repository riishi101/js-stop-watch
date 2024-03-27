const display = document.getElementById("display");
let timer = null; //timer is going to hold the ID of set interval
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime; //in miliseconds
    //time usually starts from miliseconds in computers

    timer = setInterval(update, 10);
    isRunning = true;
  }
}

// The Date.now() method is generally more reliable and
// efficient than other methods for getting the current time
// in JavaScript.

// setInterval() function
// function in JavaScript is used to repeatedly,
// execute a function at a specified time interval.
// It's a powerful tool for creating animations, dynamic
// content updates, and other timed actions on web pages.

// clearInterval() function
// The clearInterval function is used to stop a timer created,
// with setInterval. It takes the interval ID returned by,
// setInterval as its argument.

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now(); //date right now
  elapsedTime = currentTime - startTime; //in miliseconds

  //formulas to get hrs, min, secs
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let miliseconds = Math.floor((elapsedTime % 1000) / 10);

  //to get two decimals when displayed
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
