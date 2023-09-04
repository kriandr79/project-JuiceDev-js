import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';

const allCategories = document.querySelector('.all-categories');


allCategories.addEventListener('click', onBookClick);

const body = document.body;

let $selectedBookInfo = null;
async function fetchBooks(bookid) {
  try {
    if (!bookid) {
      throw new Error('Book ID not found');
    }

    const response = await axios.get(`https://books-backend.p.goit.global/books/${bookid}`);
const { _id, book_image, list_name, author, description, amazon_product_url, buy_links, publisher } = response.data;

$selectedBookInfo = {
  _id,
  book_image,
  list_name,
  author,
  description,
  amazon_product_url,
  buy_links,
  publisher
};


    const bookCard = `
      <div class="book-card-modal" data-id="${_id}"> 
        <img src="${book_image}" alt="${list_name} Cover" class="book-cover">
        <div class="book-inform"> 
          <h2 class="book-title" aria-label="${list_name}">${list_name}</h2>
          <p class="book-author" aria-label="${author}"> ${author}</p>
          <p class="book-description">${description}</p>
        <button class="js-add" type="submit" data-id="${_id}">Add to shopping list</button>
      </div>`;
return  bookCard;
  } 
catch (err) {

   

console.log(err);
  }}



  function onBookClick(e) {
    const target = e.target.closest('.item-link-book');
    if (target) {
      const bookId = target.getAttribute('list-id');
  
      fetchBooks(bookId).then(bookCard => {
        body.classList.add('modal-open');
        const instance = basicLightbox.create(`
            <div class="modal">
              ${bookCard}
            </div>`);
        instance.show();
        const addBtn = document.querySelector('.js-add');
        addBtn.addEventListener('click', onhandlerAdd);
        instance.element().addEventListener('click', function (e) {
          if (e.target === instance.element()) {
            closeModal();
          }})
      });
    }
  }

  function closeModal() {
    // Видалити клас "modal-open" з батьківського елемента (фонового контенту)
    body.classList.remove('modal-open');
  
    const instance = basicLightbox.instance();
    if (instance) {
      instance.close();
    }
  }
  
  const PRODUCT_LS_KEY = 'storebook';
  
  function onhandlerAdd(evt) {
    if (evt.target.classList.contains('js-add')) {
      if ($selectedBookInfo) {
        const books = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
        const currentBook = books.find(({ id }) => id === $selectedBookInfo._id);
  
        if (currentBook) {
        
          const bookIndex = books.findIndex(({ id }) => id === $selectedBookInfo._id);
          books.splice(bookIndex, 1);
  
          evt.target.textContent = 'Add to shopping list';
        } else {
          const newBook = { id: $selectedBookInfo._id, qty: 1, info: $selectedBookInfo };
          books.push(newBook);

          evt.target.textContent = 'Remove from the shopping list';
        }
  
        localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(books));
      }
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

{/* <div ${buy_links}> 
          <a  href="${amazon_product_url}" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow">
          <svg class=" height="10">
          <use href="../images/amazon.svg "></use>
      </svg></a>
      <a  href="https://www.apple.com/ua/apple-books/" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow">
  <svg class=" height="10">
  <use href="../images/applebook.svg "></use>
  </svg>
  </a>
  <a  href="https://bookshop.org/" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow">
  <svg class=" height="10">
  <use href="../images/shopingbooks.svg "></use>
  </svg>
  </a>
        </div> */}