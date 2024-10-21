const timer = document.querySelector(".display");
const start = document.querySelector(".start-btn");
const pause = document.querySelector(".pause-btn");
const reset = document.querySelector(".reset-btn");
// console.log(timer);

let sec = 0;
let min = 0;
let hour = 0;
let timerid = null;

start.addEventListener("click", () => {
  if (timerid != null) {
    clearInterval(timerid);
    console.log(timerid)
  }
  timerid=setInterval(starttimer, 10);
  console.log(timerid)

});

pause.addEventListener("click",() => {
  clearInterval(timerid);
  console.log(timerid)

});

reset.addEventListener("click", () => {
  clearInterval(timerid);
  console.log(timerid)

  timer.innerHTML = `00:00:00`;
});

function starttimer() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hour++;
    }
  }
  let second = sec < 10 ? `0${sec}` : sec;
  let minutes = min < 10 ? `0${min}` : min;
  let hours = hour < 10 ? `0${hour}` : hour;
  timer.innerHTML=`${hours}:${minutes}:${second}`
}
