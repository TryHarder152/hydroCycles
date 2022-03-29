'use strict';

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

// class Card
class Card {
  constructor(hideSale, image, title, price, productPage, parentSelector) {
    this.hideSale = hideSale;
    this.image = image;
    this.title = title;
    this.price = price;
    this.productPage = productPage;

    this.parent = document.querySelector(parentSelector);
    this.dollar = 95.66;
    this.conversionToDollars();
  }

  conversionToDollars() {
    this.price = this.price / this.dollar;
  }

  renderCard() {
    let card = document.createElement('li');
    card.classList.add('goods__item');

    if(!isNaN(this.price)) {
      card.insertAdjacentHTML('afterbegin', `
      <div class="goods__item-status ${this.hideSale}">Sale</div>
      <div class="goods__item-favorite-btn">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="goods__item-img">
        <a class="goods__item-view-product" href="${this.productPage}">посмотреть товар</a>
        <img src="${this.image}" alt="product1">
      </div>
      <div class="goods__item-title">
        ${this.title}
      </div>
      <div class="goods__item-price">
        ${Math.floor(this.price)}$
      </div>
      <div class="goods__item-add-btn">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      `);
      this.parent.append(card);
    } else {
      card.insertAdjacentHTML('afterbegin', `
      <div class="goods__item-status ${this.hideSale}">Sale</div>
      <div class="goods__item-favorite-btn">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="goods__item-img">
        <a class="goods__item-view-product" href="${this.productPage}">посмотреть товар</a>
        <img src="${this.image}" alt="product1">
      </div>
      <div class="goods__item-title">
        ${this.title}
      </div>
      <div class="goods__item-price sold-out">
        Нет в наличии
      </div>
      <div class="goods__item-add-btn">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      `);
      this.parent.append(card);
    }
  }
}

new Card(
  'hide',
  'images/hydrocycles/hydrocycle1.png',
  'Гидроцикл BRP SeaDoo GTI 130hp SE Black Mango',
  1049500,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  '',
  'images/hydrocycles/hydrocycle2.png',
  'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
  1100475,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle3.png',
  'Гидроцикл BRP SeaDoo GTR 230hp X California green',
  1323700,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle4.png',
  'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream',
  'Нет в наличии',
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle5.png',
  'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal',
  1543000,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle6.png',
  'Гидроцикл BRP SeaDoo Spark 60hp 2 up',
  732345,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle7.png',
  'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental',
  857666,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle8.png',
  'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue',
  1229711,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle9.png',
  'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper',
  587440,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle10.png',
  'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple',
  587440,
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  '',
  'images/hydrocycles/hydrocycle11.png',
  'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla',
  'Нет в наличии',
  'product.html',
  '.goods__items'
).renderCard();

new Card(
  'hide',
  'images/hydrocycles/hydrocycle12.png',
  'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry',
  'Нет в наличии',
  'product.html',
  '.goods__items'
).renderCard();
