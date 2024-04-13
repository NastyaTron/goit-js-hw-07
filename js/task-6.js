const textInput = document.querySelector('#controls input');

const onTextInput = event => {
  const amount = event.currentTarget.value;
  if (1 <= amount <= 100) {
    return;
  }
};
textInput.addEventListener('input', onTextInput);
function createBoxes(amount) {
  const itemEl = document.querySelector('.boxes');
  const navItemEl = document.createElement('div');
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  navItemEl.backgroundColor = getRandomHexColor();
  navItemEl.width = '30';
  navItemEl.height = '30';
  itemEl.append(navItemEl);
}
const actions = document.querySelectorAll('#controls button');
console.log(actions);
