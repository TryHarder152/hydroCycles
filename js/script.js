'use strict';

// slider
const slides = document.querySelectorAll('.main-banner__wrapper-img');
const prevArrow = document.querySelector('.main-banner__arrow-left');
const nextArrow = document.querySelector('.main-banner__arrow-right');
const sliderDots = document.querySelectorAll('.main-banner__dot');

let slideIndex = 1;


function showSlides(sliderNum) {
  if (sliderNum > slides.length) {
    slideIndex = 1;
  }

  if (sliderNum < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(item => item.classList.remove('block'));
  slides[slideIndex - 1].classList.add('block');

  sliderDots.forEach(item => item.classList.remove('main-banner__dot_active'));
  sliderDots[slideIndex - 1].classList.add('main-banner__dot_active');
}

function plusSlides(num) {
  showSlides(slideIndex += num);
}

prevArrow.addEventListener('click', () => {
  plusSlides(-1);
});

nextArrow.addEventListener('click', () => {
  plusSlides(1);
});

showSlides(slideIndex);


// search
const searchCategories = document.querySelectorAll('.search-category'),
      searchContent = document.querySelectorAll('.search-content');


function hideSearchContent() {
  searchCategories.forEach((item) => {
    item.classList.remove('search-category_active');
  });
  searchContent.forEach(item => {
    item.classList.remove('search-content_active');
  });
}

function showSearchContent(index = 0) {
  searchCategories[index].classList.add('search-category_active');
  searchContent[index].classList.add('search-content_active');

  searchCategories.forEach((item, index) => {
    item.addEventListener('click', () => {
      hideSearchContent();
      item.classList.add('search-category_active');
      searchContent[index].classList.add('search-content_active');
    });
  });
}

hideSearchContent();
showSearchContent();