'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES5
  // numPassenger = numPassengers || 1;
  // price = price || $199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
// {flightNum: 'LH123', numPassenger: 1, price: 199}
createBooking('LH23', 2, 99);
// {flightNum: 'LH23', numPassenger: 2, price: 99}
createBooking('KEK', 5);
// {flightNum: 'KEK', numPassenger: 5, price: 995}
createBooking('ADR23', undefined, 1000);
// {flightNum: 'ADR23', numPassenger: 1, price: 1000}
