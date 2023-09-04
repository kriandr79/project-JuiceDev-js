import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';
const allCategories = document.querySelector('.all-categories');
allCategories.addEventListener('click', onBookClick);

let selectedBookInfo = null;

async function fetchBooks(bookid) {
  try {
    if (!bookid) {
      throw new Error('Book ID not found');
    }
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${bookid}`
    );

    const selectedBookInfo = {
      _id,
      book_image,
      list_name,
      author,
      description,
      amazon_product_url,
      buy_links,
      publisher,
    } = response.data;

  
    
    const bookCard = `
      <div class="book-card-modal" data-id="${_id}">
        <img src="${book_image}" alt="${list_name} Cover" class="book-cover">
        <div class="book-inform">
          <h2 class="book-title" aria-label="${list_name}">${list_name}</h2>
          <p class="book-author" aria-label="${author}"> ${author}</p>
          <p class="book-description">${description}</p>
          <div ${buy_links}>
          <a  href="${amazon_product_url}" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow">
          <img  src="../images/amazon.jpg" alt="amazon"  height="32">
        </a>
        <a  href="https://www.apple.com/ua/apple-books/" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow">
        <img  src="../images/applebooks.jpg" alt="apple-books"  height="32">
      </a>
      <a  href="https://bookshop.org/" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow">
        <img  src="../images/bookshop.jpg" alt="bookshop"  height="32">
      </a>
        </div>
        <button class="js-add" type="submit" data-id="${_id}">Add to shopping list</button>
      </div>`;
    return bookCard;
  } catch (err) {
    console.log(err);
  }
}

function onBookClick(e) {
  const target = e.target.closest('.item-link-book');
  if (target) {
    const bookId = target.getAttribute('list-id');

    fetchBooks(bookId).then(bookCard => {
      const instance = basicLightbox.create(`
            <div class="modal">
              ${bookCard}
            </div>`);
      instance.show();

      const addBtn = document.querySelector('.js-add');
      addBtn.addEventListener('click', onhandlerAdd);
    });
  }
}

const PRODUCT_LS_KEY = 'storebook';

function onhandlerAdd(evt) {
  if (evt.target.classList.contains('js-add')) {
    if (selectedBookInfo) {
      const books = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
      const currentBook = books.find(({ id }) => id === $selectedBookInfo._id);

      if (currentBook) {
        currentBook.qty += 1;
      } else {
        const newBook = {
          id: selectedBookInfo._id,
          qty: 1,
          info: selectedBookInfo,
        };
        books.push(newBook);
      }

      localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(books));
    }
  }
}
