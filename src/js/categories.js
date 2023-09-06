import axios from 'axios';
import { createMarkup } from './best-sellers';
import { onLoader, offLoader } from './loader';

const titleAll = document.querySelector('.all');
// titleAll.addEventListener('click', getSelectedCategory);
// console.log(titleAll.textContent);
const select = document.querySelector('.select');
// const childrenSelect = select.children;
// console.log(childrenSelect);
// select.addEventListener('click', getSelectedCategory);

const change = document.querySelector('.change-category');
change.addEventListener('click', getSelectedCategory);
const allCategories = document.querySelector('.all-categories');

export async function getBooksCategory() {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

getBooksCategory()
  .then(data => {
    let categories = [];
    categories = data;

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      let item = document.createElement('li');
      item.textContent = `${category.list_name}`;
      item.classList.add('select-text');
      item.setAttribute('idx', i);
      select.appendChild(item);
    }
  })
  .catch(err => console.log(err));
console.log(childrenSelect);

export async function getSelectedCategory(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  console.log(evt.target);
  allCategories.innerHTML = '';
  titleAll.style.color = '$color-black';
  titleAll.style.textTransform = 'none';

  let selectedCategory = evt.target.textContent;
  console.log(selectedCategory);

  onLoader();

  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
    );
    const data = response.data;
    let arr = data;

    if (arr !== []) {
      changeColor(selectedCategory);
      creatCategory(selectedCategory, arr);
      offLoader();
    } else if ((titleAll.textContent = 'All categories')) {
      childrenSelect.style.color = '$color-black';
      childrenSelect.style.textTransform = 'none';

      getAllCategoriesBooks();
    } else {
      allCategories.textContent = 'Ooops!';
    }
  } catch (error) {
    console.error(error);
  }
}

function getAllCategoriesBooks() {
  allCategories.innerHTML = '';

  // childrenSelect.style.textColor = '$color-black';
  // childrenSelect.style.textTransform = 'none';

  titleAll.style.color = '$color-violet';
  titleAll.style.textTransform = 'uppercase';

  createMarkup();
}
function changeColor(selectedCategory) {
  for (var i = 0; i < select.children.length; i++) {
    if (select.children[i].textContent == selectedCategory) {
      select.children[i].style.color = '$color-violet';
      select.children[i].style.textTransform = 'uppercase';
    } else {
      select.children[i].style.color = '$color-black';
      select.children[i].style.textTransform = 'none';
    }
  }
}

export function creatCategory(selectedCategory, arr) {
  let text = selectedCategory;
  let lastWord = text.split(' ').pop();
  let newText = text.replace(
    lastWord,
    "<span class='last-word'>" + lastWord + '</span>'
  );
  const markup = `<h1 class="title-category">${newText}</h1>
  <ul class="wrap">${arr
    .map(({ list_name, book_image, title, author, _id }) => {
      return `
    <li class='list book-card' id = "${_id}" data-book="book-box">
    <div id = "${_id}" class='book-img'>
    <img id = "${_id}" aria - label="${list_name}" src="${book_image}" alt="${title}" loading="lazy" class="cover" />
    <p id = "${_id}" class='quick-view'>quick view</p>
    </div>
    <div id = "${_id}" class="book-info">
    <p id = "${_id}" aria - label="${title}" class="title">${title}</p>
    <p id = "${_id}" aria - label="${author}" class="author">${author}</p>
    </div>
    </li>`;
    })
    .join('')}
  </ul>`;

  allCategories.insertAdjacentHTML('beforeend', markup);
}
