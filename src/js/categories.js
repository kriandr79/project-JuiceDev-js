import axios from 'axios';
import { createMarkup } from './best-sellers';
import { onLoader, offLoader } from './loader';

const select = document.querySelector('.select');

select.addEventListener('click', getSelectedCategory);

const allCategories = document.querySelector('.all-categories');

createMarkup();

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
    creatListCategoryes(categories);
  })
  .catch(err => console.log(err));

export async function getSelectedCategory(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  allCategories.innerHTML = '';

  let selectedCategory = evt.target.textContent;

  changeColor(selectedCategory);

  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
    );
    const data = response.data;
    let arr = data;

    if (selectedCategory == 'All categories') {
      select.firstChild.style.color = '#4F2EE8';
      select.firstChild.style.textTransform = 'uppercase';

      createMarkup();
    } else if (arr !== []) {
      creatCategory(selectedCategory, arr);
    } else {
      errorMessage();
    }
  } catch (error) {
    console.error(error);
  }
}

function creatListCategoryes(categories) {
  const first = document.createElement('li');
  first.textContent = 'All categories';
  first.classList.add('first');
  select.prepend(first);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    let item = document.createElement('li');
    item.textContent = `${category.list_name}`;
    item.classList.add('select-text');
    select.insertAdjacentElement('beforeend', item);
  }
}

function changeColor(selectedCategory) {
  select.firstChild.style.color = '#111111';
  select.firstChild.style.textTransform = 'none';

  for (var i = 0; i < select.children.length; i++) {
    if (select.children[i].textContent == selectedCategory) {
      select.children[i].style.color = '#4F2EE8';
      select.children[i].style.textTransform = 'uppercase';
    } else {
      select.children[i].style.color = '#111111';
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
    <img id = "${_id}" aria - label="${list_name}" src="${book_image}" alt="${title}" loading="lazy" class="cover" onerror="this.style.visibility = 'hidden'"/>
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

function errorMessage() {
  const err = document.createElement('h2');
  err.classList.add('err-title');
  err.textContent =
    'Sorry, there are no books matching your search query. Please try again.';
  allCategories.insertAdjacentElement('beforeend', err);
  err.style.display = 'block';
}
