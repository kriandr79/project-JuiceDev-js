const currentPath = window.location.pathname.slice(1); 
const HEADER_NAV_CLASS = 'current';

const headerNavLinks = document.querySelectorAll('.header-nav-list a');

for (const link of headerNavLinks) {
  const linkHref = link.getAttribute('href').substring(1); 

  if (currentPath === linkHref) {
    link.classList.add(HEADER_NAV_CLASS);
  } else {
    link.classList.remove(HEADER_NAV_CLASS);
  }
}
