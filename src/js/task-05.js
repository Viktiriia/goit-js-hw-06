// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".



const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    output.textContent = currentTarget.value.trim();
  } else {
    output.textContent = 'Anonymous';
  }
};

input.addEventListener('input', getInputValue);
