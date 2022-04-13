let beat = new Audio("./Cow-moo-sound.mp3");

function playSound() {
  beat.play();
}
var timer;

function startTimer() {
  let time = document.getElementById("timer").value;
  let clock = document.getElementById("clock");
  clock.innerHTML = time;
  console.log(time);

  timer = setInterval(function () {
    time--;
    // Update the UI
    if (time > 0) {
      clock.innerHTML = clock.innerHTML - 1;
      console.log(time);
    } else {
      clock.innerHTML = 0;
      playSound();
      clearInterval(timer);
    }
  }, 1000);
}
function resetTimer() {
  clearInterval(timer);
  clock.innerHTML = 0;
}

function maskTimer(e) {
  document.getElementById("timer").value = e.target.value.replace(/\D/g, "");
}
