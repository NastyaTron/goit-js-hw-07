function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const inputEl = document.querySelector('#controls input');
const btnElCreate = document.querySelector('[data-create]');
const btnElDestroy = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

btnElCreate.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  if (!1 <= amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
});

function createBoxes(amount) {
  boxEl.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxEl.append(box);
  }
}

btnElDestroy.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  boxEl.innerHTML = '';
}
