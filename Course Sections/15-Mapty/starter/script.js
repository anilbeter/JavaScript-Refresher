'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// first function -> success callback
// second function -> error callback
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude);
    // 39.9336842
    console.log(longitude);
    // 32.7294199
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
      // yaklaşık olarak konumumu gösteren bir link oluşturdum
    );
  },
  function () {
    alert('Could not get your position');
  }
);
// If I press Allow, output will ->  GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1697266426350}
