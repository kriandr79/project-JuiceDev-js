import { getTopBooks } from './api-best-sellers';

const allCategories = document.querySelector('.all-categories');

createMarkup();

export async function createMarkup() {
  allCategories.innerHTML = '';

  const info = await getTopBooks();
  // console.log('info from getTopBooks:', info);
  createGallery(info);
}

// const allCategories = document.querySelector('.all-categories');

export function createGallery(data) {
  const absentImage = '/images/book_absent.png';
  const markup = `
  <h1 class="title-best-sellers">Best Sellers <span class="title-span">Books</span></h1>
    <ul class="list-names list">${data
      .map(elements => {
        if (elements.books && elements.books.length > 0) {
          return `
        <li class="list-categories list">
            <h2 class="list-categories-title">${elements.list_name}</h2>
            <div class="card-container" list-name-id="${elements.list_name}">
            ${elements.books
              .map(book => {
                return `
                <a class="item-link-book" id ="${book._id}" data-book="book-box">
                  <div  class="card-of-book">
                    <img
                    id ="${book._id}"
                    aria-label="${book.book_image}"
                      src="${book.book_image}"
                      alt="${book.title}"
                      class="img-card-title"
                      width="180"
                      height="256"
                      loading="lazy"
                    />
                    <div class="overlay-book">
                      <p id ="${book._id}" class="overlay-text" >quick view</p>
                    </div>
                  </div>
                  <div id ="${book._id}" class="book-description">
                    <h3 aria-label="${
                      book.title || 'Title Absent'
                    }" class="card-title" id ="${book._id}">${book.title || 'Title Absent'}</h3>
                    <p aria-label="${
                      book.author || 'Author Absent'
                    }" class="card-author" id ="${book._id}">${book.author || 'Author Absent'}</p>
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
        } else {
          return '';
        }
      })
      .join('')}
    </ul>`;
  allCategories.insertAdjacentHTML('beforeend', markup);
}

//   Рома
// const seeMoreBtn = document.querySelectorAll('.book-button');

// seeMoreBtn.forEach(btn => {
//   btn.addEventListener('click', onSeeMoreBtn);
// });

//   Ірина
// const seeMoreBtn = document.querySelectorAll('.book-button');
// const cardLink = document.querySelectorAll('.item-link');

// seeMoreBtn.forEach(btn => {
//   btn.addEventListener('click', onSeeMoreBtn);
// });

// cardLink.forEach(book => {
//   book.addEventListener('click', onBookClick);
// });

// export function onSeeMoreBtn(e) {

// } функція для реалізації кнопки see more і переходу на відповідну категорію
// export function onBookClick(e) {

// } відкриття модалки по кліку на книгу
