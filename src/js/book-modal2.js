import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';
import amazonImg from '../images/amazon.png';
import appleShopImg from '../images/applebook.png';
import bookShopImg from '../images/bookshop.png';
import closeSvg from '../images/icons.svg';

const PRODUCT_LS_KEY = 'my-shoppinglist';

const allCategories = document.querySelector('.all-categories');
allCategories.addEventListener('click', onBookClick);

async function fetchBooks(bookid) {
  try {
    if (!bookid) {
      throw new Error('Book ID not found');
    }
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${bookid}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

let instance;
let closeButton;
let backdrop;

async function onBookClick(e) {
  const target = e.target.closest('[data-book="book-box"]');
  if (target) {
    const bookId = target.getAttribute('id');
    let action = '';
    const storedBooks = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
    let bookData = storedBooks.find(book => book.id === bookId);

    if (bookData) {
      action = 'remove';
    } else {
      try {
        const {
          _id,
          book_image = '<img src="" alt="Poster not found"/>',
          list_name,
          title,
          author,
          description = 'No description',
          publisher,
          buy_links,
        } = await fetchBooks(bookId);

        bookData = {
          id: _id,
          image: book_image,
          book_category: list_name,
          title,
          author,
          description,
          publisher,
          buy_links,
        };
      } catch (err) {
        console.log(err);
      }

      action = 'add';
    }

    instance = basicLightbox.create(makeBookCardMarkup(bookData, action));
    instance.show();
    document.body.classList.add('modal-open');

    
    backdrop = document.querySelector('.modal');
    closeButton = document.querySelector('.close-modal-btn');

    
    backdrop.addEventListener('click', handleBackdropClick);
    closeButton.addEventListener('click', handleCloseButtonClick);
    window.addEventListener('keydown', handleEscKey);

    const actionBtn = document.querySelector('.js-add');
    actionBtn.addEventListener('click', event => {
      onBtnPress(bookData, event);
    });
  }
}

function handleCloseButtonClick() {
  instance.close();
  document.body.classList.remove('modal-open');
}

function handleEscKey(e) {
  if (e.key === 'Escape') {
    instance.close();
    document.body.classList.remove('modal-open');
    closeButton.removeEventListener('click', handleEscKey);
  }
}

function handleBackdropClick(e) {
  if (e.target === backdrop) {
    instance.close();
    // document.body.classList.remove('modal-open');
    backdrop.removeEventListener('click', handleBackdropClick);
  }
}


function onBtnPress(currentBook, event) {
  const action = event.target.getAttribute('data-action'); // Берем параметр действия кнопки - add / remove
  const storedBooks = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || []; // Берем сохраненные книги из ЛС

  if (action === 'add') {
    storedBooks.push(currentBook); // добавляем новую книгу в массив
    event.target.setAttribute('data-action', 'remove'); // меняем кнопку на Remove
    event.target.textContent = 'Remove from shopping list';
  } else if (action === 'remove') {

    const index = storedBooks.findIndex(book => book.id === currentBook.id); // ищем индекс книги в массие
    if (index !== -1) {
      storedBooks.splice(index, 1); // удаляем книгу из массива
    }

    event.target.setAttribute('data-action', 'add'); // меняем кнопку на ADD
    event.target.textContent = 'Add to shopping list';
  }

  if (storedBooks.length === 0) {
    localStorage.removeItem(PRODUCT_LS_KEY); // Если массив книг пустой (удалена последняя книга), удаляем ключ в ЛС
  } else {
    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(storedBooks)); // если не пустой добавляем массив книг в ЛС
  }
}

function makeBookCardMarkup(
  {
    id,
    image,
    book_category,
    title,
    author,
    description,
    publisher,
    buy_links,
  },
  action
) {
  
  // Фільтруємо лінки по трьом назвам та робимо із них зразу li
  const buyLinks = buy_links
    .filter(
      item =>
        item.name === 'Amazon' ||
        item.name === 'Apple Books' ||
        item.name === 'Books-A-Million'
    )
    

  // Робимо відповідну кнопку Add або Remove
  let actionBtnMarckup = '';
  if (action === 'add') {
    actionBtnMarckup = `<button class="js-add" type="submit" data-action="add">Add to shopping list</button>`;
    
  } else if (action === 'remove') {
    actionBtnMarckup = `<button class="js-add" type="submit" data-action="remove">Remove from shopping list</button>`;
    
  }
  const shopIcons = {
    Amazon: amazonImg,
    'Apple Books': appleShopImg,
    'Books-A-Million': bookShopImg,
  };
  return `
        <div class="modal modal-backdrop">
        <div class="book-card-modal" data-id="${id}"> 
        <button class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${closeSvg}#icon-clear"></use>
        </svg>
      </button>
        <div class="modal-wrapper">
          <img src="${image}" alt="${title}" class="modal-book-img">
          <div class="modal-titles"> 
            <h2 class="modal-book-name" aria-label="${title}">${title}</h2>
            <p class="modal-book-author" aria-label="${author}"> ${author}</p>
            <p class="modal-book-description">${description}</p>
            <div> 
            <ul class="list-partners">
            ${buyLinks
              .map(
                buyLink => `<li class="shop-item-partners">
                    <a
                      href="${buyLink.url}"
                      class="shop-partners-link"
                      target="_blank"
                      rel="noopener no-referrer"
                      ><img src="${shopIcons[buyLink.name]}" alt="${buyLink.name}"
                    /></a>
                  </li>`
              )
              .join('')}
          </ul>
            </div> 
          </div>
          </div>
          ${actionBtnMarckup}
      </div>
      </div>`;
}





