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
let cards = [
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle1.png',
    title: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black Mango',
    price: 1049500,
    productLink: 'product.html',
  },
  {
    sale: '',
    image: 'images/hydrocycles/hydrocycle2.png',
    title: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
    price: 1100475,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle3.png',
    title: 'Гидроцикл BRP SeaDoo GTR 230hp X California green',
    price: 1323700,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle4.png',
    title: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream',
    price: 'Нет в наличии',
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle5.png',
    title: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal',
    price: 1543000,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle6.png',
    title: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up',
    price: 732345,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle7.png',
    title: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental',
    price: 857666,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle8.png',
    title: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue',
    price: 1229711,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle9.png',
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper',
    price: 587440,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle10.png',
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple',
    price: 587440,
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle11.png',
    title: 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla',
    price: 'Нет в наличии',
    productLink: 'product.html',
  },
  {
    sale: 'hide',
    image: 'images/hydrocycles/hydrocycle12.png',
    title: 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry',
    price: 'Нет в наличии',
    productLink: 'product.html',
  }
];

class Card {
  constructor(hideSale, image, title, price, productPage) {
    this.hideSale = hideSale;
    this.image = image;
    this.title = title;
    this.price = price;
    this.productPage = productPage;

    this.parent = document.querySelector('.goods__items');
    this.card = '';
    this.dollar = 83.43;
    this.conversionToDollars();
  }
  

  conversionToDollars() {
    this.price = this.price / this.dollar;
  }

  renderCard() {
    this.card = document.createElement('li');
    this.card.classList.add('goods__item');

    if(!isNaN(this.price)) {
      this.card.innerHTML =  `
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
      `;
      this.parent.append(this.card);
    } else {
      this.card.innerHTML = `
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
      <div class="goods__item-add-btn sold-out-btn">
        <a href="#">Сообщить о поступлении</a>
      </div>
      `;
      this.parent.append(this.card);
    }
  }

  placeCards() {
    cards.forEach((item, index) => {
      new Card (
        cards[index].sale,
        cards[index].image,
        cards[index].title,
        cards[index].price,
        cards[index].productLink,
        cards[index].productParent
      ).renderCard();
    });
  }
}

let cardsPage = new Card();
cardsPage.placeCards();
