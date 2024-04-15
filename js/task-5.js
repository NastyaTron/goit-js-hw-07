function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickMe = document.querySelector('.change-color');
const backgroundBox = document.querySelector('body');
const nameColor = document.querySelector('.color');

clickMe.addEventListener('click', moveColor);

function moveColor() {
  const randomColor = getRandomHexColor();
  backgroundBox.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
}
