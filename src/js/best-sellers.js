import { getTopBooks } from './api-best-sellers';

createMarkup();

export async function createMarkup() {
  const info = await getTopBooks();
  console.log('info from getTopBooks:', info);
  createGallery(info);
}





const allCategories = document.querySelector('.all-categories');

allCategories.addEventListener('click', function (event) {
  const target = event.target.closest('.item-link-book');

  // Перевірте, чи клікнуто на елемент з класом 'item-link-book'
  if (target) {
    // Отримайте атрибут 'list-id' з клікнутого елемента
    const bookId = target.getAttribute('list-id');

    // Виведіть ID книги в консоль
    console.log('Клікнуто на книжку з ID:', bookId);
  }
});


function createGallery(data) {
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
              const imgSrc = book.book_image || absentImage; // Використовуємо 'absent-image.png', якщо book.book_image не існує
              let imgAlt = ''; // Змінна для зберігання значення атрибута alt

              if (book.book_image) {
                imgAlt = book.title;
              } else {
                imgAlt = 'Title Absent';
              }
              
              return `
                <a class="item-link-book" list-id='${book._id} aria-label="${book.title || 'Title Absent'} by ${book.author || 'Author Absent'}"'>
                  <div class="card-of-book">
                    <img
                      src="${imgSrc}"
                      alt="${imgAlt}"
                      class="img-card-title"
                      width="180"
                      height="256"
                      loading="lazy"
                      
                    />
                    <div class="overlay-book">
                      <p class="overlay-text">quick view</p>
                    </div>
                  </div>
                  <div class="book-description">
                    <h3 class="card-title">${book.title || 'Title Absent'}</h3>
                    <p class="card-author">${book.author || 'Author Absent'}</p>
                  </div>
                </a>`;
            })
            .join('')}
            </div>
        <button class="book-button" type="button" data-id="${elements.list_name
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

