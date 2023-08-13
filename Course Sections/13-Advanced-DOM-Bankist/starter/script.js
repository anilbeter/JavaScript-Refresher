'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////

// Button scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const section1Coordinates = section1.getBoundingClientRect();
  console.log(section1Coordinates);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll X/Y', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   section1Coordinates.left + window.scrollX,
  //   section1Coordinates.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: section1Coordinates.left + window.scrollX,
  //   top: section1Coordinates.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // Modern way (only works modern browsers)
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // Old school way
    message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // height ı kendim script.js de ayarlamadıgım icin bu değeri okuyamıyorum
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).color);
// rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 48.975px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// custom css property
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo

console.log(logo.className); // nav__logo

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
// http://127.0.0.1:8080/img/logo.png
console.log(logo.getAttribute('src'));
// img/logo.png

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
// http://127.0.0.1:8080/#
console.log(link.getAttribute('href'));
// #

// Data attributes
console.log(logo.dataset.versionNumber);
// 3.0

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not include

// Don't use
logo.className = 'anil';
*/

/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//  old school way
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };


// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
// NodeList(2) [span.highlight, span.highlight]
console.log(h1.childNodes);
// NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children);
// HTMLCollection(3) [span.highlight, br, span.highlight]

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1 in kendisini yazdım bu kez en yakını bulmak yerine direkt kendine uyguladı background gradient primary yi
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
// null
console.log(h1.nextElementSibling);
// <h4></h4>

// previous veya next değil de bütün siblingleri görmek istiyorsam uygulayabileceğim teknik: h1 in önce parent elemanını buluyorum ondan da bütün child elementleri listeliyorum, bütün siblingler gözükmüş oluyor
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
