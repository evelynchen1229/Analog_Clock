const secondHand = document.getElementById('secondHand');
const minutedHand = document.getElementById('minuteHand');
const hourHand = document.getElementById('hourHand');

function tick() {
  /*to  get the current time */
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours() % 12; /*becuase in the clock face the number is up to 12 */

  /* need to make the hands rotate, first need to set the degree for rotation */

/*after secondhand rotates a circle, one minute ( 60seconds) passed*/
  const secondDeg = second * 6; /* 360 degree / 60 seconds */

/*after minutehand rotates a circle,60 minutes would pass
also, within every second ticking, the minutehand would move
slightly towards the next minute, namely, within 60 seconds, the hand will rotate 6 degree*/
  const minuteDeg = (minute * 6)  + (second * 0.1) ;/*(360 degree / 60 minutes) + (6 degree / 60 seconds)*/

  /*after hourhand rotates a circle, 12 hours would pass
  also, within every minute ticking, the minutehand would move
  slightly towards the nexthour, namely, within 60 minutes, the hand will rotate 360/12 degree*/
  const hourDeg = (hour * 30) + (minute * 0.5); /*(360 degree / 12 hours) + (30 degree / 60 minutes)*/

  /*then put the degree in the style.transform */
  secondHand.style.transform = "rotate (" + secondDeg + "deg)";
  minutedHand.style.transform = "rotate (" + minuteDeg + "deg)";
  hourHand.style.transform = "rotate (" + hourdDeg + "deg)";

  /*the time will be updated every second*/
  setTimeout(tick, 1000)
}

tick();
