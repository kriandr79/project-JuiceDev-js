const location = window.location.pathname.slice(1).split('/');
const locationPageName = location[1];

const HEADER_NAV_CLASS = 'current'

const headerNavList = document.querySelector('.header-nav-list');

if (locationPageName === 'index.html') {
  headerNavList.children[0].classList.toggle(HEADER_NAV_CLASS);
} else if (locationPageName === 'shoppinglist.html') {
  headerNavList.children[1].classList.toggle(HEADER_NAV_CLASS);
}
