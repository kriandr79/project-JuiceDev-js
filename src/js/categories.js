import axios from 'axios';
// import { createMarkup } from './best-sellers';
import { onLoader, offLoader } from './loader';

const select = document.querySelector('.select');
console.dir(select);
const allCategories = document.querySelector('.all-categories');

select.addEventListener('click', getSelectedCategory);

async function getBooksCategory() {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const data = response.data;
    console.log(response);
    return data;
  } catch (error) {
    console.error(error);
  }
}

getBooksCategory()
  .then(data => {
    console.log(data);
    let categories = [];
    categories = data;
    console.log(categories);

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      let item = document.createElement('li');
      item.textContent = `${category.list_name}`;
      item.classList.add('select-text');
      select.appendChild(item);
    }
    const first = select.firstElementChild;
    first.textContent = 'All categories';
    first.classList.add('select-text');
    select.prepend(first);
  })
  .catch(err => console.log(err));
console.log(select);

async function getSelectedCategory(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  allCategories.innerHTML = '';
  onLoader();

  for (var i = 0; i < select.children.length; i++) {
    select.children[i].onclick = function () {
      for (var j = 0; j < select.children.length; j++) {
        select.children[j].style.color = 'rgba(17, 17, 17, 0.6)';
        select.children[j].style.textTransform = 'none';
      }
      this.style.color = 'rgb(79, 46, 232';
      this.style.textTransform = 'uppercase';
    };
  }
  console.log(evt.target);

  let selectedCategory = evt.target.textContent;
  console.dir(selectedCategory);

  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
    );
    const data = response.data;
    console.log(data);
    let arr = data;
    console.log(arr);
    if (arr !== []) {
      creatCategory(selectedCategory, arr);
      offLoader();
    } else {
      allCategories.textContent = 'Ooops!';
    }
  } catch (error) {
    console.error(error);
  }
}

function creatCategory(selectedCategory, arr) {
  let text = selectedCategory;
  let lastWord = text.split(' ').pop();
  let newText = text.replace(
    lastWord,
    "<span style='color: rgb(79, 46, 232)'>" + lastWord + '</span>'
  );
  const markup = `<h1 class="title-category">${newText}</h1>
  <ul class="wrap">${arr
    .map(({ list_name, book_image, title, author, _id }) => {
      return `
    <li class='list book-card' id = "${_id}">
    <div class='book-img'>
    <img id = "${_id}" aria - label="${list_name}" src="${book_image}" alt="${title}" loading="lazy" class="cover" />
    <p id = "${_id}" class='quick-view'>quick view</p>
    </div>
    <div class="book-info">
    <p id = "${_id}" aria - label="${title}" class="title">${title}</p>
    <p id = "${_id}" aria - label="${author}" class="author">${author}</p>
    </div>
    </li>`;
    })
    .join('')}
  </ul>`;

  allCategories.insertAdjacentHTML('beforeend', markup);
}
