import './header-burger';
import './support-ukraine';
import './site-theme';
import './btntop.js';
import './header.js';
import './firebase-btns.js';
import './firebase-functions.js';
import './firebase-modals.js';

import { offLoader, onLoader } from '../js/loader.js';
onLoader();
window.addEventListener('load', loadBookLS);
offLoader();

const KEY_LS = 'storebook';
let imgEmptyBig = new URL('/src/images/empty-page@2.png', import.meta.url);
let imgEmpty = new URL('/src/images/empty-page.png', import.meta.url);
let imgAmazon = new URL('/src/images/amazon.png', import.meta.url);
let imgAppleBooks = new URL('/src/images/applebook.png', import.meta.url);
let imgBookshop = new URL('/src/images/bookshop.png', import.meta.url);
let imgTrash = new URL('/src/images/trash-03.png', import.meta.url);

const ulMarkupLS = document.querySelector('.shoppingList-books');

let loadData = localStorage.getItem(KEY_LS);
let parsedData = JSON.parse(loadData);

function loadBookLS() {
  if (parsedData && parsedData.length > 0) {
    markupBookContent(parsedData);
  } else {
    ulMarkupLS.innerHTML = markupBookEmpty;
  }
}

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
                      </svg>   
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
                          href="${parsedData.buy_links.find(link => link.name === 'Amazon')?.url}"
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
                          href="${parsedData.buy_links.find(link => link.name === 'Apple Books')?.url}"
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
                          href="${parsedData.buy_links.find(link => link.name === 'Bookshop')?.url}"
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
              </li>
            `;
    })
    .join('');
  ulMarkupLS.innerHTML = markupBookLi;

  deleteBookId();
}

function deleteBookId() {
  let dots = document.getElementsByClassName('box-shoppingList-trash');
  let i;

  for (i = 0; i < dots.length; i+1) {
    dots[i].addEventListener('click', e => {
      let keyId = e.target.parentElement.attributes.id.value;
      let filtered = parsedData.filter(o => o.id !== keyId);

      localStorage.setItem(KEY_LS, JSON.stringify(filtered));
      loadData = localStorage.getItem(KEY_LS);
      parsedData = JSON.parse(loadData);
      loadBookLS();
    });
  }
}