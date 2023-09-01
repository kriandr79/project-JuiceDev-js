import { getTopBooks } from './api-best-sellers';

createMarkup();

async function createMarkup() {
  const info = await getTopBooks();
  console.log('info from getTopBooks:', info);
  createGallery(info);
}

const allCategories = document.querySelector('.all-categories');

function createGallery(data) {
  const markup = `
  <h1 class="title-best-sellers">Best Sellers <span class="title-span">Books</span></h1>
    <ul class="list-names list">${data
      .map(elements => {
        return `
        <li class="list-categories list">
            <h2 class="list-categories-title">${elements.list_name}</h2>
            <div class="card-container" list-name-id="${elements.list_name}">
            ${elements.books
              .map(book => {
                return `
                <a class="item-link" list-id='${book._id}'>
                  <div class="card-of-book">
                    <img
                    src="${book.book_image}"
                        alt="${book.title}"
                        class="img-card-title"
                        width="180"
                        height="256"
                        loading="lazy"
                    />
                  </div>
                  <div class="book-description">
                    <h3 class="card-title">${book.title}</h3>
                    <p class="card-author">${book.author}</p>
                  </div>
                </a>`;
              })
              .join('')}
            </div>
        <button class="book-button" type="button" data-id="${
          elements.list_name
        }">See More
        </button>
        </li>`;
      })
      .join('')}
    </ul>`;
  allCategories.insertAdjacentHTML('beforeend', markup);
}

const seeMoreBtn = document.querySelectorAll('.book-button');
const cardLink = document.querySelectorAll('.item-link');

seeMoreBtn.forEach(btn => {
  btn.addEventListener('click', onSeeMoreBtn);
});

cardLink.forEach(book => {
  book.addEventListener('click', onBookClick);
});

// export function onSeeMoreBtn(e) {

// } функція для реалізації кнопки see more і переходу на відповідну категорію
// export function onBookClick(e) {

// } відкриття модалки по кліку на книгу
