const location = window.location.pathname.slice(1).split('/');
const locationPageName = location[1];

const HEADER_NAV_CLASS = 'current';

const headerNavLinks = document.querySelectorAll('.header-nav-list a');

for (const link of headerNavLinks) {
  const linkHref = link.getAttribute('href');
  
  if (linkHref === locationPageName) {
    link.classList.add(HEADER_NAV_CLASS);
  } else {
    link.classList.remove(HEADER_NAV_CLASS);
  }
}
