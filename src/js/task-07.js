// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const controlSizeText = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');

const fontSizeControl = ({ currentTarget }) =>
  (sizeText.style.fontSize = `${currentTarget.value}px`);

controlSizeText.addEventListener('input', fontSizeControl);