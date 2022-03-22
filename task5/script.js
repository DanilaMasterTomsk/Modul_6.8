const element = document.querySelector('input');


element.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Новый текст');
  element.value = "" + name;
  
}

