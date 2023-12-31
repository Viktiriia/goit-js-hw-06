// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.



const categoriesEl = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const titlesCategoriesRef = document.querySelectorAll('.item');
titlesCategoriesRef.forEach((title) => {
  console.log('Category:', title.firstElementChild.textContent);
  console.log('Elements:', title.lastElementChild.children.length);
});




