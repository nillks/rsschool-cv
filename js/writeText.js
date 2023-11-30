setTimeout(async function () {
  let textTitle = document.querySelector(".about__title");
  let textSpan = document.querySelector(".about__title-decoration");

  const textToType = "Джедай-фронтенд";
  const textToType2 = "РАЗРАБОТЧИК";

  const typingSpeed = 100;

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

  await typeText(textTitle, textToType);
  await typeText(textSpan, textToType2);
}, 6000);
