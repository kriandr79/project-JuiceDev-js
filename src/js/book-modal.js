import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

allCategories = document.querySelector(".all-categories")
allCategories.addEventListener('click', onBookClick);
export function onBookClick(e) {
    const target = e.target.closest('.item-link');
        if (target) { const bookId = target.getAttribute('list-id');
    }
    
    const instance = basicLightbox.create(`<div class="modal">
   
    </div>
`)

instance.show()}
