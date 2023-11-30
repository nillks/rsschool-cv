let progressBar = document.querySelectorAll(".skills__info-elm");

function getValueSkills(element, score) {
  return new Promise((resolve) => {
    let maxValue = score;

    let progressValue = 0;

    let interval = setInterval(function () {
      progressValue = progressValue + 5;

      element.style.width = progressValue + "%";

      if (progressValue >= maxValue) {
        clearInterval(interval);
        resolve();
      }
    }, 300);
  });
}

function getValueSkillsJS(element, score) {
  return new Promise((resolve) => {
    let maxValue = score;
    let progressValue = 0;

    let interval = setInterval(function () {
      progressValue = progressValue + 5;

      element.style.width = progressValue + "%";

      if (progressValue >= maxValue) {
        clearInterval(interval);

        let decreasingInterval = setInterval(function () {
          progressValue = progressValue - 5;

          element.style.width = progressValue + "%";

          if (progressValue <= 10) {
            clearInterval(decreasingInterval);
            resolve();
          }
        }, 300);
      }
    }, 300);
  });
}

let functionCalled = false;

window.addEventListener("scroll", function () {
  let windowHeight = window.innerHeight;

  let skillsSection = document.querySelector(".skills");
  let skillsSectionTop = skillsSection.getBoundingClientRect().top;
  let skillsSectionBottom = skillsSection.getBoundingClientRect().bottom;

  if (
    !functionCalled &&
    skillsSectionTop < windowHeight &&
    skillsSectionBottom > 0
  ) {
    getValueSkills(progressBar[0], 100)
      .then(() => getValueSkillsJS(progressBar[1], 150))
      .then(() => getValueSkills(progressBar[2], 80))
      .then(() => getValueSkills(progressBar[3], 150));
    functionCalled = true;
  }
});
