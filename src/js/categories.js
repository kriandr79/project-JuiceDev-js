
// import { createMarkup } from './best-sellers';

const select = document.querySelector('.select');
console.dir(select);

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
    let first = document.createElement('li');
    first.textContent = 'All categories';
    first.classList.add('select-text');
    select.prepend(first);

    for (let i = 1; i < categories.length; i++) {
      const category = categories[i];
      let item = document.createElement('li');
      item.textContent = `${category.list_name}`;
      item.classList.add('select-text');
      select.appendChild(item);
    }
    console.log(select);
  })
  .catch(err => console.log(err));

// const render = document.querySelector('.all-categories');
const allCategories = document.querySelector('.all-categories');

async function getSelectedCategory(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  console.log(evt.target);
  allCategories.innerHTML = '';

  let selectedCategory = evt.target.textContent;
  console.log(selectedCategory);
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
    );
    const data = response.data;
    console.log(data);
    // titleCategory.textContent = selectedCategory;

    let arr = data;
    console.log(arr);
    return creatCategory(selectedCategory, arr);
  } catch (error) {
    console.error(error);
  }
}

function creatCategory(selectedCategory, arr) {
  // const titleCategory = `<h1 class="title-category>${selectedCategory}</h1>`;
  // render.insertAdjacentHTML('afterbegin', titleCategory);

  const markup = `<h1 class="title-category">${selectedCategory}</h1>
  <ul class="wrap">${arr
    .map(({ list_name, book_image, title, author, _id }) => {
      return `
    <li class='list book-card' id = "${_id}">
    <img aria - label="${list_name}" src="${book_image}" alt="${title}" loading="lazy" class="cover" />
    <p class='quick-view'>quick view</p>
    <div class="book-info">
    <p aria - label="${title}" class="title">${title}</p>
    <p aria - label="${author}" class="author">${author}</p>
    </div>
    
    </li>`;
    })
    .join('')}
  </ul>`;

  allCategories.insertAdjacentHTML('beforeend', markup);
}

// const render = document.querySelector('.render');
// const titleCategory = document.querySelector('.title-category');

// else {
//           let title = 'Sorry, there are no books matching your search query. Please try again.';
//       }

// getBooksCategory()
//   .then(data => {
//     console.log(data);
//     let categories = [];
//     categories = data;
//     console.dir(categories);
//     if (categories !== []) {
//       for (let i = 0; i < categories.length; i++) {
//         const category = categories[i];
//         let item = document.createElement('li');
//         item.textContent = `${category.list_name}`;
//         item.classList.add('select-text');
//         select.appendChild(item);
//       }
//     } else {
//       titleCategory =
//         'Sorry, there are no books matching your search query. Please try again.';
//     }
//   })
//   .catch(err => console.log(err));
