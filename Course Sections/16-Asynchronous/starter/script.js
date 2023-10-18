'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const html = `
  <article class="country ${className}">
 <img class="country__img" src= "${data.flags.svg}">
 <div class="country__data">
   <h3 class="country__name"> ${data.name.official}</h3>
   <h4 class="country__region">${data.region}</h4>
   <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
     1
   )} million</p>         
   <p class="country__row"><span>🗣️</span>${languages[0]}</p>
   <p class="country__row"><span>💰</span>${currencies[0].name}</p>
 </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data); //use this to study the data you want to use.

    // Render country 1
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders;
    console.log(neighbour); // (8) ['ARM', 'AZE', 'BGR', 'GEO', 'GRC', 'IRN', 'IRQ', 'SYR']
    if (!neighbour) return;

    neighbour.forEach(neighbour => {
      let request2 = new XMLHttpRequest();
      request2.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${neighbour}
      `
      );
      request2.send();
      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);
        console.log(data2);

        // render neighbour countries
        renderCountry(data2, 'neighbour');
      });
    });
  });
};

// Sample countries whose details we want to display.
getCountryAndNeighbour('usa');
*/

// This is how we used to work:
// -- -- -- -- -- -- -- -- -- --
// const request = new XMLHttpRequest();
// request.open("GET", "API LINK");
// request.send();

const request = fetch('https://restcountries.com/v3.1/name/usa');
console.log(request); // Promise {<pending>}
// pending -> before the future value is available

// Avantages of promises & fetch
// 1. we no longer need to rely on events and callbacks passed into asynchronous to handle asynchronous results;
// 2. Instead of nesting callbacks, we can *chain promises* for a sequence of asycnhronous operations: escaping callback hell

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); // json method available for all the response objects that coming from fetch. response.json() -> new promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}🌠`);
      renderError(`Something went wrong ${err.message}. Try again!`);
      // .catch method must be in the end of the chaining! catch will be handle all rejected errors (only called promise is rejected)

      // Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('usa');
});
