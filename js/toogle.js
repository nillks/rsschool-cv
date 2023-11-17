const themeSwitch = document.querySelector(".header__theme-icon");
const root = document.documentElement;

// Создаем новый circle
const newCircle = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
newCircle.setAttribute("cx", "20%");
newCircle.setAttribute("cy", "50%");
newCircle.setAttribute("r", "18%");
newCircle.setAttribute("fill", "rgb(34,40,49)");

// Добавляем новый circle к SVG
themeSwitch.appendChild(newCircle);

// Продолжаем с вашим кодом
const circleElement = themeSwitch.querySelector("circle");

function animateSwitch(startValue, endValue, duration) {
  const increment = (endValue - startValue) / (duration / 10);
  let currentValue = startValue;

  const intervalId = setInterval(() => {
    currentValue += increment;
    circleElement.setAttribute("cx", currentValue);

    if (
      (increment > 0 && currentValue >= endValue) ||
      (increment < 0 && currentValue <= endValue)
    ) {
      clearInterval(intervalId);
    }
  }, 10);

  return intervalId;
}

function changeTheme() {
  const currentCX = parseFloat(circleElement.cx.baseVal.value);
  const targetCX = currentCX < 50 ? 80 : 20;

  // Вызываем animateSwitch только если нужна анимация
  if (currentCX !== targetCX) {
    const animationDuration = 500;
    const intervalId = animateSwitch(currentCX, targetCX, animationDuration);

    // Добавляем обработчик события завершения анимации
    setTimeout(() => {
      clearInterval(intervalId);
      circleElement.setAttribute("cx", targetCX + "%");
    }, animationDuration);
  }

  changeThemex();

  setThemeToLocalStorage(targetCX);
}

function changeThemex() {
  const root = document.documentElement;

  const logo = document.querySelector(".header__logo-img");

  console.log(logo.attributes[4].nodeValue);

  logo.attributes[4].nodeValue == "#eee"
    ? (logo.attributes[4].nodeValue = "#222831")
    : (logo.attributes[4].nodeValue = "#eee");

  const worksDiscElement = document.querySelector(".works__disc");

  // Добавляем класс, который изменяет стиль псевдоэлемента
  worksDiscElement.classList.toggle("arrow-style");

  const propertyMappings = {
    "--main-bg-color": { oldValue: "#222831", newValue: "#dbdbdb" },
    "--main-font-color": {
      oldValue: "rgba(238, 238, 238, 0.75)",
      newValue: "rgba(49, 45, 45, 0.75)",
    },
    "--light-color": { oldValue: "#fff", newValue: "#3b3939" },
    "--dark-color": {
      oldValue: "rgba(57, 62, 70, 0.75)",
      newValue: "rgba(75, 137, 238, 0.75)",
    },
    "--border-color": {
      oldValue: "rgba(238, 238, 238, 0.1)",
      newValue: "rgba(19, 18, 18, 0.1)",
    },
    "--btn-color": {
      oldValue: "rgba(57, 62, 70, 0.5)",
      newValue: "rgba(237, 240, 246, 0.5)",
    },
  };

  function updateProperty(property, { oldValue, newValue }) {
    let currentValue = getComputedStyle(root).getPropertyValue(property);
    root.style.setProperty(
      property,
      currentValue === oldValue ? newValue : oldValue
    );
  }

  Object.entries(propertyMappings).forEach(([property, values]) => {
    updateProperty(property, values);
  });
}

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme");
}

function setThemeToLocalStorage(targetCX) {
  localStorage.setItem("theme", JSON.stringify({ targetCX }));
}

// При загрузке страницы, проверяем сохраненную тему
const savedTheme = getThemeFromLocalStorage();

if (savedTheme) {
  const { targetCX } = JSON.parse(savedTheme);
  circleElement.setAttribute("cx", targetCX + "%");
}

themeSwitch.addEventListener("click", changeTheme);
