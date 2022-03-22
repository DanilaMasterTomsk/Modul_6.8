const para = document.querySelector('a');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Новый текст');
  para.textContent = 'Изменён: ' + name;
  Event.preventDefault();
}
