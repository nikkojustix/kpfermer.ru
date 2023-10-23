import * as flsFunctions from './modules/functions.js';
import { Splide } from '@splidejs/splide';
import fslightbox from 'fslightbox';

flsFunctions.isWebp();

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', flsFunctions.toggleMobileMenu);

const topThumbsImgs = document.querySelectorAll('.top__thumbs-img');
const topImgs = document.querySelector('.top__imgs');
const topImgBg = topImgs.style.backgroundImage;
topThumbsImgs.forEach((img) => {
  img.addEventListener('click', () => {
    topImgs.style.backgroundImage = `url(${img.src})`;
  });
});

flsFunctions.tabs('tabs__btn', 'tabs__item', 'active');

new Splide('.gallery', {
  arrows: true,
  pagination: false,
  type: 'loop',
  padding: '27%',
  gap: '80px',
  speed: '700',
  breakpoints: {
    1199: {
      padding: '20%',
    },
    767: {
      padding: '80px',
    },
    550: {
      padding: '20px',
    },
  },
}).mount();

new Splide('.testimonials', {
  perPage: 3,
  perMove: 1,
  pagination: false,
  gap: 20,
  type: 'loop',
  breakpoints: {
    999: {
      perPage: 2,
    },
    767: {
      perPage: 1,
    },
  },
}).mount();

flsFunctions.bindModal('.open-modal', '.modal--form', '.modal__close');
flsFunctions.bindModal('.open-modal-plan', '.modal--plan', '.modal__close');

// get current year
document.querySelector('.current-year').innerHTML = new Date().getFullYear();

// scroll to top
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollBtn.style.visibility = 'visible';
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.visibility = 'hidden';
    scrollBtn.style.opacity = '0';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
