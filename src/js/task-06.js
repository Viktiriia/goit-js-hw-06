// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/> */}
// 1  Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// 2 Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', handleBlurBorderColor);
function handleBlurBorderColor(event) {
  const dataLength = Number(inputRef.dataset.length);
  const valueLength = Number(inputRef.value.length);

  if (valueLength === dataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}