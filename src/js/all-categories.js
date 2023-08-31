/* 

Примітка
1. <h1> (Best Sellers)
2. <ul> (список всіх категорій)
3.  <li> (списки категорій з книжками)
3.1.  <h2> (назва категорії)
3.2. <div> (вішаємо <a> на всю картку, щоб відкривалась модалка)
3.3. <div> (всередину посилання вміщаємо картинку, назву книги, автора)
3.3.1 <div> (img)
3.3.2 <div> (h3 + p, назва + автор)
закриваємо <a> + join
4. <button> (see more)
закриваємо li
join + закриваємо ul 

*/

import { getTopBooks } from './api-top-books';

createMarkup();

async function createMarkup() {
  const info = await getTopBooks();
  console.log('info from getTopBooks:', info);
  createGallery(info);
}

const allCategories = document.querySelector('.all-categories');

function createGallery(data) {
  const markup = `
  <h1 class="title-best-sellers">Best Sellers</h1>
    <ul class="list-names">${data
      .map(elements => {
        return `
        <li class="list-categories">
            <h2 class="list-categories-title">${elements.list_name}</h2>
            <div list-name-id="${elements.list_name}">
            ${elements.books
              .map(book => {
                return `
                <a list-id='${book._id}'>
                <div class="card-of-book">
                <img
                src="${book.book_image}"
                    alt="${book.title}"
                    class="img-card-title"
                    width="180"
                    height="256"
                    loading="lazy"
                />
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
        }">See More</button>
        </li>`;
      })
      .join('')}
    </ul>`;
  allCategories.insertAdjacentHTML('beforeend', markup);
}
