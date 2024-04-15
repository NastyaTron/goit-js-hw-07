function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const inputEl = document.querySelector('#controls input');
const btnElCreate = document.querySelector('[data-create]');
const btnElDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  const boxEl = document.querySelector('#boxes');
  boxEl.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    size += 10;
    boxEl.append(box);
  }
}

function destroyBoxes() {
  const boxEl = document.querySelector('#boxes');
  boxEl.innerHTML = '';
}

btnElCreate.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  if (amount < 1 || amount > 100) {
    return;
  }
});

btnElDestroy.addEventListener('click', () => {
  destroyBoxes();
});
