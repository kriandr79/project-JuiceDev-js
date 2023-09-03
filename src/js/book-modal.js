// import * as basicLightbox from 'basiclightbox';
// import "basiclightbox/dist/basicLightbox.min.css";

// allCategories = document.querySelector(".all-categories")
// allCategories.addEventListener('click', onBookClick);
// export function onBookClick(e) {
//     const target = e.target.closest('.item-link');
//         if (target) { const bookId = target.getAttribute('list-id');
//     }
    
//     const instance = basicLightbox.create(`<div class="modal">
   
//     </div>
// `)

// instance.show()}

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';

const allCategories = document.querySelector('.all-categories');

allCategories.addEventListener('click', onBookClick);

async function onBookClick(e) {
  const target = e.target.closest('.item-link');
  if (target) {
    const bookId = target.getAttribute('list-id');

    try {
      if (!bookId) {
        throw new Error('Book ID not found');
      }

      const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
      const { book_image, list_name, author, description, buy_links } = response.data;

      const bookCard = `
        <div class="book-card">
          <img src="${book_image}" alt="${list_name} Cover" class="book-cover">
          <div class="book-inform">
          <h2 class="book-title">${list_name}</h2>
          <p class="book-author">Author: ${author}</p>
          <p class="book-description">${description}</p>
          <div>${buy_links}</div>
        </div>
        <button class="js-add" type="button">Add to shopping list</button>
        </div>`;

  

      // Create and show the modal
      const instance = basicLightbox.create(`
        <div class="modal">
          ${bookCard}
        </div>
      `);

      instance.show();
    } catch (error) {
      console.error(error);
    }
  }
}


function handlerAdd(evt) {
    if (!evt.target.classList.contains('js-add')) {
        return;
    }
  
    const book = evt.target.closest('item-link');
    const bookId = Number(book.dataset.id);
    const currentBook = books.find(({ id }) => id === bookId);
    const books = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
    const idx = books.findIndex(({ id }) => id === bookId);
  
    if (idx !== -1) {
        books[idx].qty += 1;
    } else {
        currentBook.qty = 1;
        books.push(currentBook);
    }
  
    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(books))
  }
  