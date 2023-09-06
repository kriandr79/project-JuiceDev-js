const headerContainer = document.querySelector('.header-container');
const burgerMenuBtn = document.querySelector('.header-burger-menu-btn');
const headerNav = document.querySelector('.header-nav');
const headerNavList = document.querySelector('.header-nav-list');
const headerButtons= document.querySelector('.header-buttons');
const headerMobileMenu = document.querySelector(".header-mobile-menu");
const screenWidth = window.screen.width;

function appendItems() {
    const width = document.body.clientWidth;
    if (width < 768) {
        headerMobileMenu.append(headerButtons, headerNavList);
    }  else {
        headerNav.append(headerNavList);
        headerContainer.append(headerButtons);
    }
}
appendItems();

window.addEventListener('resize', function() {
    appendItems();
    if (headerMobileMenu.classList.contains('is-hidden') || document.body.clientWidth >= 768) {
        document.body.classList.remove('no-scroll');
    } else {
        document.body.classList.add('no-scroll');
    }
});

burgerMenuBtn.addEventListener('click', showHideMobileMenu);

function showHideMobileMenu() {
  toggleClass(burgerMenuBtn, 'is-open');
  toggleClass(headerMobileMenu, 'is-hidden');
  document.body.classList.toggle('no-scroll');

  const ariaExpanded = burgerMenuBtn.getAttribute('aria-expanded');
  burgerMenuBtn.setAttribute('aria-expanded', ariaExpanded === 'true' ? 'false' : 'true');
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}