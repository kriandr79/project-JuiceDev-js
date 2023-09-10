import './header-burger';
import './support-ukraine';
import './site-theme';
import './btntop.js';
import './header.js';
import './firebase-btns.js';
import './firebase-functions.js';
import './firebase-modals.js';
// Pagination=========================
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// ===================================

const KEY_LS = 'my-shoppinglist';
let imgEmptyBig = new URL('/src/images/empty-page@2.png', import.meta.url);
let imgEmpty = new URL('/src/images/empty-page.png', import.meta.url);
let imgAmazon = new URL('/src/images/amazon.png', import.meta.url);
let imgAppleBooks = new URL('/src/images/applebook.png', import.meta.url);
let imgBookshop = new URL('/src/images/bookshop.png', import.meta.url);
let imgTrash = new URL('/src/images/trash-03.png', import.meta.url);

const ulMarkupLS = document.querySelector('.shoppingList-books');
console.dir(ulMarkupLS);

let loadData = localStorage.getItem(KEY_LS);
let parsedData = loadData ? JSON.parse(loadData) : null;

const markupBookEmpty = `<li><p class="shoppingList-text">
  This page is empty, add some books and proceed to order.
</p>
<a href="./index.html">
  <picture>
    <source srcset="${imgEmptyBig} 2x" type="image/png" />
    <img
      class="shoppingList-img"
      src="${imgEmpty}"
      alt="Book"
    />
  </picture>
</a></li>`;

document.addEventListener('DOMContentLoaded', () => {
  loadBookLS();
});
// ==========  Paginstion  ===============================

const boxPagination = document.querySelector('#pagination');
console.log(boxPagination);

let page = 30;
let perPage = 3;

const options = {
  totalItems: page,
  itemsPerPage: perPage,
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  usageStatistics: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(boxPagination, options);

pagination.on('afterMove', loadBookLS);

// === END Pagination ===========================================

function loadBookLS() {
  if (parsedData && parsedData.length > 0) {
    markupBookContent(parsedData);
  } else {
    ulMarkupLS.innerHTML = markupBookEmpty;
  }
}

function markupBookContent(parsedData) {
  ulMarkupLS.innerHTML = '';

  const markupBookLi = parsedData
    .map(parsedData => {
      return `<li class="books-shoppingListLi">
        <img
          class="books-shoppingList-img"
          src="${parsedData.image}"
          alt=""
        />
        <div class="box-shoppingList-content">
          <div id="cont" class="box-shoppingList">
            <div>
              <h2 class="text-shoppingList-title">${parsedData.title}</h2>
              <p class="text-shoppingList-category">${parsedData.publisher}</p>
            </div>
            <button class="box-shoppingList-trash" id="${parsedData.id}">
              <img
                class="box-shoppingList-trash-icon"
                src="${imgTrash}"
                alt="trash"
              />       
            </button>
          </div>
          <p class="text-shoppingList-content">
            ${parsedData.description}
          </p>
          <div class="box-shoppingList-link">
            <p class="text-shoppingList-author">${parsedData.author}</p>
            <ul class="box-shoppingList-shop">
              <li>
                <a
                  class="shop-shoppingList-link"
                  target="_blank"
                  href="${
                    parsedData.buy_links.find(link => link.name === 'Amazon')
                      ?.url
                  }"
                >
                  <img
                    class="shop-shoppingList-img1"
                    src="${imgAmazon}"
                    alt="Amazon Link"
                  />       
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  target="_blank"
                  href="${
                    parsedData.buy_links.find(
                      link => link.name === 'Apple Books'
                    )?.url
                  }"
                >                          
                  <img
                    class="shop-shoppingList-img2"
                    src="${imgAppleBooks}"
                    alt="Apple Books Link"
                  />           
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  target="_blank"
                  href="${
                    parsedData.buy_links.find(link => link.name === 'Bookshop')
                      ?.url
                  }"
                >
                  <img
                    class="shop-shoppingList-img2"
                    src="${imgBookshop}"
                    alt="Bookshop link"
                  />       
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>`;
    })
    .join('');

  ulMarkupLS.innerHTML = markupBookLi;
}

ulMarkupLS.addEventListener('click', deleteBookId);

function deleteBookId(event) {
  const btnTarget = event.target.closest('.box-shoppingList-trash');

  if (btnTarget) {
    const bookId = event.target.parentElement.attributes.id.value;

    if (bookId) {
      const savedData = localStorage.getItem(KEY_LS);
      const parsedSavedData = savedData ? JSON.parse(savedData) : [];

      const updatedData = parsedSavedData.filter(book => book.id !== bookId);

      localStorage.setItem(KEY_LS, JSON.stringify(updatedData));

      event.target.closest('.books-shoppingListLi').remove();

      if (updatedData.length === 0) {
        ulMarkupLS.innerHTML = markupBookEmpty;
      }
    }
  }
}
