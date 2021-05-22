const button = document.querySelector('button');
const form = document.querySelector('form');
const list = document.querySelector('#list');

button.addEventListener('click', (e) => {
  e.preventDefault();
  addToCart(form.product.value, form.qty.value);
});

const addToCart = (product, qty) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${qty} ${product}`
  list.append(listItem);
};
