let downBtn = document.querySelector(".about__info--link");

function downLoft() {
  downBtn.classList.remove("jump");
}

downBtn.addEventListener("click", downLoft);