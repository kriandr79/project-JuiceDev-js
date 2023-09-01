const buttonToTop = document.querySelector('.btn-top');

window.addEventListener('scroll', onScroll);
buttonToTop.addEventListener('click', onButtonToTop);

function onScroll() {
  const scrolled = window.scrollY;
  const size = document.documentElement.clientHeight;

  if (scrolled > size) {
    buttonToTop.classList.add('btn-top--visible');
  }
  if (scrolled < size) {
    buttonToTop.classList.remove('btn-top--visible');
  }
}

function onButtonToTop() {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}