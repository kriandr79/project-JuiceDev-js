import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";


//  function onBookClick (evt) {
//     evt.preventDefault();
//     if(evt.target.classList.contains("item-link")) {
//       const {id} = evt.target.closest(".item-link").dataset;
//       const product = findProduct(Number(id));
//       const instance = basicLightbox.create(`
//         <h1>Dynamic Content</h1>
//         <p>You can set the content of the lightbox with JS.</p>
//     `);
//     instance.show()
//     }
//     }
//     function findProduct (productId){
//       return books.find(({id}) => id === productId)
//     }
const selectors = {
  container: document.querySelector('.item-link')
}
selectors.container.addEventListener('click', handlerAdd);
const PRODUCT_LS_KEY = 'checkout';
function handlerAdd(evt) {
  if (!evt.target.classList.contains('js-add')) {
      return;
  }

  const product = evt.target.closest('.item-link');
  const productId = Number(product.dataset.id);
  const currentProduct = books.find(({ id }) => id === productId);
  const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
  const idx = products.findIndex(({ id }) => id === productId);

  if (idx !== -1) {
      products[idx].qty += 1;
  } else {
      currentProduct.qty = 1;
      products.push(currentProduct);
  }

  localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products))
}