'use strist';
const objImg = [
  {
    src: 'img/product-1.jpeg',
    nam: 'High-Back Bench',
    price: 9.99,
    owner: 'Ikea',
  },
  {
    src: 'img/product-11.jpeg',
    nam: 'Albany Sectional',
    price: 10.99,
    owner: 'Ikea',
  },
  {
    src: 'img/product-6.jpeg',
    nam: 'Sofa Set',
    price: 69.99,
    owner: 'Liddy',
  },
  {
    src: 'img/product-8.jpeg',
    nam: 'Emperor Bed',
    price: 21.99,
    owner: 'Liddy',
  },
  {
    src: 'img/product-10.jpeg',
    nam: 'Entertainment Center',
    price: 29.99,
    owner: 'Liddy',
  },
  {
    src: 'img/product-12.jpeg',
    nam: 'Leather Sofa',
    price: 9.99,
    owner: 'Liddy',
  },
  {
    src: 'img/product-3.jpeg',
    nam: 'Ancent Chair',
    price: 25.99,
    owner: 'Caressa',
  },
  {
    src: 'img/product-4.jpeg',
    nam: 'Wooden Table',
    price: 45.99,
    owner: 'Caressa',
  },
  {
    src: 'img/product-5.jpeg',
    nam: 'Dining',
    price: 6.99,
    owner: 'Caressa',
  },
  {
    src: 'img/product-2.jpeg',
    nam: 'Albany Table',
    price: 6.99,
    owner: 'Marcos',
  },
  {
    src: 'img/product-7.jpeg',
    nam: 'Modern Bookshelf',
    price: 8.99,
    owner: 'Marcos',
  },
  {
    src: 'img/product-9.jpeg',
    nam: 'Utopla Sofa',
    price: 39.95,
    owner: 'Marcos',
  },
];
const input = document.querySelector('input');
input.value = '';
const ul = document.querySelector('ul');

const containt = document.querySelector('.containt');

const displayAll = function () {
  containt.innerHTML = '';

  objImg.forEach((img) => {
    const htmlEl = `<div class="imgContainer">
          <img src="${img.src}" alt="" />
          <figcaption class="nam">${img.nam}</figcaption>
          <span class="price">${img.price}</span>
        </div>`;
    containt.insertAdjacentHTML('afterbegin', htmlEl);
  });
};
displayAll();

const displayType = function (property, own) {
  if (own == 'All') return;
  containt.innerHTML = '';
  objImg
    .filter((img) => img[property] == own)
    .forEach((img) => {
      const htmlEl = `<div class="imgContainer">
            <img src="${img.src}" alt="" />
            <figcaption class="nam">${img.nam}</figcaption>
            <span class="price">${img.price}</span>
          </div>`;
      containt.insertAdjacentHTML('afterbegin', htmlEl);
    });
};
ul.addEventListener('click', function (e) {
  const clicked_id = e.target.getAttribute('id');
  if (clicked_id == 'ulEl') return;
  clicked_id == 'All' && displayAll();
  input.value = '';
  displayType('owner', clicked_id);
});
// All.addEventListener('click', displayAll);
let Key_input = [];
let key_Joined = '';

input.addEventListener('keyup', function (e) {
  // const clicked_key = e.key;
  // /////////////
  // /////////////
  // if (clicked_key == 'Backspace') {
  //   Key_input.pop(Key_input[Key_input.length - 1]);
  // } else if (
  //   clicked_key == 'Enter' ||
  //   clicked_key == 'Shift' ||
  //   clicked_key == 'Escape'
  // ) {
  //   console.log('enter');
  // } else {
  //   Key_input.push(clicked_key);
  // }
  // key_Joined = Key_input.join('').toLowerCase();
  // containt.innerHTML = '';
  // objImg
  //   .filter((img) => img.nam.toLowerCase().includes(key_Joined))
  //   .forEach((img) => {
  //     const htmlEl = `<div class="imgContainer">
  //               <img src="${img.src}" alt="" />
  //               <figcaption class="nam">${img.nam}</figcaption>
  //               <span class="price">${img.price}</span>
  //             </div>`;
  //     containt.insertAdjacentHTML('afterbegin', htmlEl);
  //   });
  // console.log(Key_input, key_Joined);
  // if (containt.innerHTML == '')
  //   containt.innerHTML = `<h2>Sorry, no product macthed your search</h2>`;
  containt.innerHTML = '';
  console.log(input.value.toLocaleLowerCase());
  objImg
    .filter((img) => img.nam.toLowerCase().includes(input.value.toLowerCase()))
    .forEach((img) => {
      const htmlEl = `<div class="imgContainer">
                <img src="${img.src}" alt="" />
                <figcaption class="nam">${img.nam}</figcaption>
                <span class="price">${img.price}</span>
              </div>`;
      containt.insertAdjacentHTML('afterbegin', htmlEl);
    });
  input.value == '' && displayAll();
  if (containt.innerHTML == '')
    containt.innerHTML = `<h2>Sorry, no product macthed your search</h2>`;
});
