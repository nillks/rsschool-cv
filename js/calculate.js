let currentValue = document.querySelector('.calculator__slider');
let currentHoursDisplay = document.querySelector('.calculator__hours');
let currency = document.querySelector('.calculator__currency');

function updateHours() {
  currentHoursDisplay.textContent = `${currentValue.value} часов`;
  currency.textContent = `${currentValue.value * 100} $`;
}

currentValue.addEventListener('input', updateHours);

console.log(currentValue.value);
