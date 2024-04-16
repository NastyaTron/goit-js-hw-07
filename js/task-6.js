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
  const amount = inputEl.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    size += 10;
    fragment.append(box);
  }
  boxEl.appendChild(fragment);
}

function destroyBoxes() {
  boxEl.innerHTML = '';
}

btnElDestroy.addEventListener('click', () => {
  destroyBoxes();
});
