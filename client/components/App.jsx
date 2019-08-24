import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const App = ({ listing }) => {
  const chargePerNight = `$${listing.chargePerNight}`;
  const review = `${listing.numberOfRatings}`;

  const OuterContainer = styled.div`
    position: fixed;
    top: 75px;
    margin-left: 45px;
    width: 376px;
    border: 1px lightgray solid;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  `;

  const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
  `;

  const Cost = styled.span`
    font-size: 22px;
    font-weight: 700;
    margin-right: 5px;
  `;

  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <Cost>{chargePerNight}</Cost>
          <span>per night</span>
        </div>
        <div>
          <span>{review}</span>
        </div>
      </InnerContainer>
    </OuterContainer>
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
