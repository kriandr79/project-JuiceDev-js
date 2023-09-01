import { funds } from './funds';

function createFundsMarkup(funds) {
  const markup = funds.map((fund, index) => {
    const foundIndex = String(index + 1).padStart(2, '0');

    return `
      <div class="funds__carousel-item">
        <span class="funds__carousel-item-number">${foundIndex}</span>
        <a class='funds__carousel-item-link' href="${fund.url}" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${fund.title}">
          <img class="funds__carousel-item-img" src="${fund.img}" alt="${fund.title}" loading="lazy" height="32">
        </a>
      </div>
    `;
  }).join('');
  return markup;
}

const fundsContainer = document.querySelector('#fundsList');
fundsContainer.insertAdjacentHTML(
  'beforeend',
  createFundsMarkup(funds)
);

const slider = $(".slider-item");

slider.each(function(element) {
  const $element = $(element);
  $element.data('slider-length', $element.children().length);
}).slick({    
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  vertical: true,
  centerPadding: 0,
  mobileFirst: false,
  responsive: [
    {	
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }
  ]
}).on('afterChange', onSliderAfterChange).on('wheel', onSliderWheel);


function onSliderAfterChange(event, currentSlide) {
  $(event.target).data('current-slide', currentSlide);
}

function onSliderWheel(element) {
  const deltaY = element.originalEvent.deltaY,
    currentSlider = $(element.currentTarget),
    currentSlickIndex = currentSlider.data('current-slide') || 0;
     
  if (
    // check when you scroll up
    (deltaY < 0 && currentSlickIndex == 0) ||
    // check when you scroll down
    (deltaY > 0 && currentSlickIndex == currentSlider.data('slider-length') - 1)
  ) {
    return;
  }

  element.preventDefault();

  if (element.originalEvent.deltaY < 0) {
    currentSlider.slick('slickPrev');
  } else {
    currentSlider.slick('slickNext');
  }
}