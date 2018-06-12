let hourHand = document.getElementById('hourHand');
let minuteHand = document.getElementById('minuteHand');
let secondHand = document.getElementById('secondHand');

function initClock() {
  let date = new Date();

  let second = date.getSeconds();
  let hour = date.getHours() % 12;
  let minute = date.getMinutes();


  let secondDeg = second * 6;
  let hourDeg = hour * 30 + 0.5 * minute;
  let minuteDeg = minute * 6 + 0.1 * second;

  secondHand.style.transform = "rotate(" + secondDeg + "deg)";
  minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";
  hourHand.style.transform = "rotate(" + hourDeg + "deg)";

  setTimeout(initClock, 1000);
};

initClock();
