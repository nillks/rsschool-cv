let findBtn = document.querySelector(".about__link-find");
let findText = document.querySelector(".find__info-text");
let close = document.querySelector(".find__info-close");

function getInfo(e) {
  e.preventDefault();
  console.dir(findText);
  findText.style.padding = "30px";
  findText.style.width = "100%";
  findText.style.height = "100%";
  // Добавляем слушатель событий для закрытия при клике вне элемента
  document.addEventListener("click", outsideClickHandler);
}

function closeInfo(e) {
  findText.style.padding = "0";
  findText.style.width = "0";
  findText.style.height = "0";
  // Удаляем слушатель событий после закрытия элемента
  document.removeEventListener("click", outsideClickHandler);
}

function outsideClickHandler(e) {
  // Проверяем, был ли клик вне элемента
  if (!findText.contains(e.target) && e.target !== findBtn) {
    closeInfo();
  }
}

close.addEventListener("click", closeInfo);
findBtn.addEventListener("click", getInfo);
