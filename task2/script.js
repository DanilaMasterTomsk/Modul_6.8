const consoleLog1 = document.querySelector('#consoleLog');
const consoleLog2 = document.querySelector('#alert');
const consoleLog3 = document.querySelector('#prompt');

consoleLog1.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

consoleLog2.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
})

consoleLog3.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})