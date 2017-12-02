

var timeLeft = 30;
var elem = document.getElementById("timeRemainingBox");



var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    setTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}







