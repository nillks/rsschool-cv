const video = document.querySelector("#myVideo");
const videoContainer = document.querySelector(".dogs");
video.play();

video.removeAttribute("controls");

videoContainer.addEventListener("mouseenter", handleMouseEnter);
videoContainer.addEventListener("mouseleave", handleMouseLeave);

function handleMouseEnter() {
  video.play();
}

function handleMouseLeave() {
  video.pause();
}

video.addEventListener("ended", handleVideoEnd);

video.addEventListener("error", function (e) {
  console.error("Ошибка воспроизведения:", e);
});

function handleVideoEnd() {
  console.log("Видео завершено, начинаем заново");
  video.currentTime = 0;
  video.play();
}

const closeVideoBtn = document.querySelector(".close__btn-dog");
let isVideoOpen = false;

closeVideoBtn.addEventListener("click", closeVideo);

function closeVideo() {
  if (isVideoOpen) {
    document.querySelector("body").style.overflowY = "visible";
    videoContainer.classList.remove("dogs__active");
    isVideoOpen = false;
  }
}

const worksInfo = document.querySelectorAll(".works__container-link");

console.log(worksInfo)


worksInfo.forEach(element => {
  element.addEventListener("click", showInfoDog);
});

function showInfoDog(e) {
  e.preventDefault();
  document.querySelector("body").style.overflowY = "hidden";
  videoContainer.classList.add("dogs__active");
  isVideoOpen = true;
}

document.addEventListener("click", test);

let isOpen = true;

function test(e) {
  if (isOpen) {
    isOpen = false;
  } else {
    isOpen = true;
    closeVideo();
  }
}
