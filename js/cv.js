let cvBtn = document.querySelector(".about__link-cv");
let cvText = document.querySelector(".cv__info-text");
let closest = document.querySelector(".cv__info-close");

function getCV(e) {
  e.preventDefault();
  cvText.style.padding = "30px";
  cvText.style.width = "100%";
  cvText.style.height = "100%";
  // Добавляем слушатель событий для закрытия при клике вне элемента
  document.addEventListener("click", outsideClick);
}

function closeCV(e) {
  cvText.style.padding = "0";
  cvText.style.width = "0";
  cvText.style.height = "0";
  // Удаляем слушатель событий после закрытия элемента
  document.removeEventListener("click", outsideClick);
}

function outsideClick(e) {
  if (
    !cvText.contains(e.target) &&
    e.target !== cvBtn &&
    e.target !== closest
  ) {
    closeCV();
  }
}

closest.addEventListener("click", closeCV);
cvBtn.addEventListener("click", getCV);
