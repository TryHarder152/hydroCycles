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

function hideSearchContent(btn, content) {
  btn.forEach((item) => {
    item.classList.remove('search-category_active');
  });
  content.forEach(item => {
    item.classList.remove('search-content_active');
  });
}

function showSearchContent(btn, content) {
  let index = 0;
  btn[index].classList.add('search-category_active');
  content[index].classList.add('search-content_active');

  btn.forEach((item, index) => {
    item.addEventListener('click', () => {
      hideSearchContent(searchCategories, searchContent);
      item.classList.add('search-category_active');
      content[index].classList.add('search-content_active');
    });
  });
}

function initializationSearchTab(searchCategories, searchContent) {
  hideSearchContent(searchCategories, searchContent);
  showSearchContent(searchCategories, searchContent);
}

initializationSearchTab(searchCategories, searchContent);




// tabsOfGoods
// goods__category_active
const popularTabsContent = document.querySelectorAll('.popular-goods__items'),
      popularTabsBtn = document.querySelectorAll('.popular-goods__category'),
      popularArrowLeft = document.querySelector('.popular-goods__arrow-left'),
      popularArrowRight = document.querySelector('.popular-goods__arrow-right');

let activeElement = 0;

function tabsInitialization(tabsBtns, tabsContent, prevBtn, nextBtn) {
  
  function switchTabs() {
    if (activeElement < 0) {
      activeElement = tabsContent.length - 1;
    } else if (activeElement > tabsContent.length - 1) {
      activeElement = 0;
    }
  
    tabsContent.forEach(item => {
      item.classList.remove('flex');
    });
  
    tabsBtns.forEach(item => {
      item.classList.remove('goods__category_active');
    });
  
    tabsBtns[activeElement].classList.add('goods__category_active');
    tabsContent[activeElement].classList.add('flex');
  };
  
  prevBtn.addEventListener('click', () => {
    --activeElement;
    switchTabs();
  });
  
  nextBtn.addEventListener('click', () => {
    ++activeElement;
    switchTabs();
  });

  tabsBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeElement = index;
      switchTabs();
    });
  });
}

tabsInitialization(popularTabsBtn, popularTabsContent, popularArrowLeft, popularArrowRight);


// dropDownMenuFooter
let dropDownMenuBtn = document.querySelectorAll('.dropDown-toggle'),
    dropDownMenuContent = document.querySelectorAll('.dropDown-content');

function toggleDropDownMenu(dropDownMenuBtn, dropDownMenuContent) {
  dropDownMenuBtn.forEach((btn, index) => {
    btn.addEventListener('click', event => {
      if (event.target.closest('.dropDown-toggle')) {
        dropDownMenuContent[index].classList.toggle('active');
        btn.classList.toggle('rotate90Degree');
      }
    });
  });
}

toggleDropDownMenu(dropDownMenuBtn, dropDownMenuContent);


// form delivery to server
let formFooterSubmit = document.querySelector('.footer__submit');
let footerinputs = formFooterSubmit.querySelectorAll('input');

let formMessages = {
  loading: 'Загрузка...',
  success: 'Спасибо! Мы с вами свяжемся!',
  failure: 'Что-то пошло не так...',
  empty: 'Вы ничего не ввели'
}

function postData(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('statusMessage');
    statusMessage.textContent = formMessages.loading;
    form.append(statusMessage);

    const REQUEST = new XMLHttpRequest();

    REQUEST.open('POST', '../server/server.php');

    const FORM_DATA = new FormData(form);

    REQUEST.send(FORM_DATA);

    for (let input of footerinputs) {
      if (input.value == '' || input.value === null) {
        statusMessage.textContent = formMessages.empty;

        setTimeout(() => {
          statusMessage.remove();
        }, 1000);
      } else {
        REQUEST.addEventListener('load', () => {
          if(REQUEST.status === 200) {
            statusMessage.textContent = formMessages.success;

            form.reset();

            setTimeout(() => {
              statusMessage.remove();
            }, 1000);
          } else {
            statusMessage.textContent = formMessages.failure;

            setTimeout(() => {
              statusMessage.remove();
            }, 1000);
          }
        });
      }
    }
  });
}

postData(formFooterSubmit);



