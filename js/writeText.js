document.addEventListener("DOMContentLoaded", async function () {
  let textTitle = document.querySelector(".about__title");
  let textSpan = document.querySelector(".about__title-decoration");

  // Текст для печатающегося эффекта
  const textToType = "Джедай-фронтенд";
  const textToType2 = "РАЗРАБОТЧИК";

  // Время задержки между символами (в миллисекундах)
  const typingSpeed = 100;

  // Асинхронная функция для добавления текста с задержкой
  async function typeText(typingContainer, text) {
    for (let index = 0; index < text.length; index++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          typingContainer.innerHTML += text.charAt(index);
          resolve();
        }, typingSpeed);
      });
    }
  }

  // Запускаем функцию для печатающегося текста при загрузке страницы
  await typeText(textTitle, textToType);
  await typeText(textSpan, textToType2);
});
