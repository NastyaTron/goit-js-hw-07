const categoriesList = document.querySelector('#categories');
const categoriesEl = categoriesList.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);
categoriesEl.forEach(item => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('ul li').length);
});
