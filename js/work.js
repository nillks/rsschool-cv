let workBtn = document.querySelectorAll(".work__btn");
let worksContainer = document.querySelector(".works__container");

let worksData = [
  { work: "UI", title: "Какая-то UI технология", imgSrc: "./img/work1.png" },
  { work: "UX", title: "Какая-то UX технология", imgSrc: "./img/work1.png" },
  { work: "WEB", title: "Какая-то WEB технология", imgSrc: "./img/work1.png" },
];

worksData.forEach(function (data) {
  let element = document.createElement("div");
  element.className = "works__container-element";
  element.setAttribute("data-work", data.work);

  let titleElement = document.createElement("h3");
  titleElement.className = "works__container-title";
  titleElement.innerText = data.title;

  let imgElement = document.createElement("img");
  imgElement.src = data.imgSrc;
  imgElement.alt = "work";

  let linkElement = document.createElement("a");
  linkElement.href = "#";
  linkElement.className = "works__container-link";
  linkElement.innerText = "Подробнее";

  element.appendChild(titleElement);
  element.appendChild(imgElement);

  element.appendChild(linkElement);

  worksContainer.appendChild(element);
});

let worksElemet = document.querySelectorAll(".works__container-element");

workBtn.forEach((item) =>
  item.addEventListener("click", () => {
    workBtn.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    const targetWork = item.getAttribute("data-work");

    for (let i = 0; i < worksElemet.length; i++) {
      const currentWork = worksElemet[i].getAttribute("data-work");

      if (targetWork === "ALL" || targetWork === currentWork) {
        worksElemet[i].classList.remove("none");
      } else {
        worksElemet[i].classList.add("none");
      }
    }
  })
);

