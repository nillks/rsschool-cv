document.addEventListener("DOMContentLoaded", function () {
  let preloader = document.querySelector(".preloader");
  document.body.style.overflowY = "hidden";
  let currentTimeValue = document.querySelector(".preloader span");
  console.log(currentTimeValue.innerHTML);
  let intervalTime = setInterval(function () {
    let currentTime = +currentTimeValue.innerHTML;
    currentTime--;
    currentTimeValue.innerHTML = currentTime;

    if (currentTime <= 0) {
      document.body.style.overflowY = "visible";
      preloader.remove();
      clearInterval(intervalTime);
    }
  }, 1000);
});
