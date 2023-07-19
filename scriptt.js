'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnShowModal = document.querySelectorAll('.btn__show-modal');
const btnCloseModal = document.querySelector('.btn__close-modal');

btnShowModal.forEach(e =>
  e.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
const slideContent = document.querySelector('.slider__content');
const btnSliderRight = document.querySelector('.btn__slider--right');

///Scroll to

const btnScrollTo = document.querySelector('.btn__scroll-to');
const features = document.querySelector('#features');
btnScrollTo.addEventListener('click', function () {
  features.scrollIntoView({ behavior: 'smooth' });
});

//Tabs///
const operationsTabs = document.querySelector('.operations__tabs');
const operationsTab = document.querySelectorAll('.operations__tab');
const TabsContent = document.querySelectorAll('.operations__content');
// tab2.addEventListener('click', function () {
//   operationsTab.classList.remove('operations__tab--active');
// });
operationsTabs.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  operationsTab.forEach(t => t.classList.remove('operations__tab--active'));
  TabsContent.forEach(t => t.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///Slide///
const slides = document.querySelectorAll('.slider__content');

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const btnSlideLeft = document.querySelector('.btn__slider--left');
const btnSlideRight = document.querySelector('.btn__slider--right');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
const goToNext = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const goToPre = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
btnSlideRight.addEventListener('click', goToNext);
btnSlideLeft.addEventListener('click', goToPre);
