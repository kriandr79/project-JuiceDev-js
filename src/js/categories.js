import axios from 'axios';

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

const select = document.querySelector('.select');
console.dir(select);
select.addEventListener('click', getSelectedCategory);
const render = document.querySelector('.render');
const titleCategory = document.querySelector('.title-category');

getBooksCategory()
  .then(data => {
    console.log(data);
    let categories = [];
    categories = data;
    console.dir(categories);
    if (categories !== []) {
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        let item = document.createElement('li');
        item.textContent = `${category.list_name}`;
        item.classList.add('select-text');
        select.appendChild(item);
      }
    } else {
      titleCategory =
        'Sorry, there are no books matching your search query. Please try again.';
      // render.style.backgroundImage = '../images/pngegg.png';
    }
  })
  .catch(err => console.log(err));

async function getSelectedCategory(evt) {
  select.innerHTML = '';
  console.log(evt.target.textContent);
  selectedCategory = evt.target.textContent;
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
    );
    const data = response.data;
    console.log(data);
    titleCategory.textContent = selectedCategory;
    arr = data;
    creatMarkup(arr);
  } catch (error) {
    console.error(error);
  }
}

function creatMarkup(arr) {
  const markup = arr
    .map(
      ({ _id, list_name, book_image, title = 'Absent', author = 'Absent' }) =>
        `
    <li class='list' id = "${_id}">
    <img aria - label="${list_name}" src="${book_image}" alt="${title}" loading="lazy" class="cover" />
    <div class="book-info">
    <p aria - label="${title}" class="title">${title}</p>
    <p aria - label="${author}" class="author">${author}</p>
    </div>
    </li>`
    )
    .join('');

  render.insertAdjacentHTML('beforeend', markup);
}
