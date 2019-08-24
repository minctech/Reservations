import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const App = ({ listing }) => {
  const chargePerNight = `$${listing.chargePerNight} per night`;
  const review = `${listing.numberOfRatings}`;
  const Container = styled.div`
    position: fixed;
    top: 75px;
    margin-left: 45px;
    width: 376px;
    border: 1px lightgray solid;
  `;

  return (
    <Container>
      <div>
        <span>{chargePerNight}</span>
        <span>{review}</span>
      </div>
    </Container>
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
