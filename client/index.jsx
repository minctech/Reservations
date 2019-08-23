import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var listing = {
  maxGuests: 5,
  maxInfants: 3,
  chargePerNight: 150,
  cleaningFee: 10,
  serviceFee: 10,
  occupancyFee: 10,
  rating: 9,
  numberOfRatings: 300,
};

ReactDOM.render(<App listing={listing}/>, document.getElementById('root'));
