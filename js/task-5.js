const clickMe = document.querySelector('.change-color');
const backgroundBox = document.querySelector('body');
const output = document.querySelector('.color');
clickMe.addEventListener('click', moveColor);

function moveColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  backgroundBox.style.backgroundColor = getRandomHexColor();

  output.textContent = getRandomHexColor();
}
