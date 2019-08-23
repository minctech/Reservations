import React from 'react';
import PropTypes from 'prop-types';

const App = ({ listing }) => {
  const chargePerNight = `$${listing.chargePerNight} per night`;
  const review = `${listing.numberOfRatings}`;

  return (
    <div className="app">
      <div>
        <span>{chargePerNight}</span>
        <span>{review}</span>
      </div>
    </div>
  );
};

App.propTypes = {
  listing: PropTypes.shape({
    maxGuests: PropTypes.number,
    maxInfants: PropTypes.number,
    chargePerNight: PropTypes.number,
    cleaningFee: PropTypes.number,
    serviceFee: PropTypes.number,
    occupancyFee: PropTypes.number,
    rating: PropTypes.number,
    numberOfRatings: PropTypes.number,
  }),
};

App.defaultProps = {
  listing: {
    maxGuests: 5,
    maxInfants: 3,
    chargePerNight: 150,
    cleaningFee: 10,
    serviceFee: 10,
    occupancyFee: 10,
    rating: 9,
    numberOfRatings: 300,
  },
};


export default App;
