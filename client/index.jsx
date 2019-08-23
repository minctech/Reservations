import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import axios from 'axios';

axios.get('/api/dblistings', {
  params: {
    listing: 1,
  }
})
  .then((listing) => {
    ReactDOM.render(<App listing={listing.data}/>, document.getElementById('root'));
  })
  .catch((error) => {
    console.log('error fetching listing data', error);
  });

// var listing = {
//   maxGuests: 5,
//   maxInfants: 3,
//   chargePerNight: 150,
//   cleaningFee: 10,
//   serviceFee: 10,
//   occupancyFee: 10,
//   rating: 9,
//   numberOfRatings: 300,
// };
