/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexDiv = styled.div`
  display: flex;
`;

const FlexSpaceBetweenDiv = styled(FlexDiv)`
  justify-content: space-between;
  margin: 24px 0px; 
`;

const BottomMarginDiv = styled.div`
  margin-bottom: 15px;
`;

const BottomBorderDiv = styled(FlexSpaceBetweenDiv)`
  border-bottom: 1px lightgray solid;
`;

const SmallLetters = styled.span`
  font-size: 14px;
  color: darkslategray;
  padding-bottom: 8px;
`;

const SmallBoldLetters = styled(SmallLetters)`
  font-weight: 600;
`;

const Total = ({ listing, selectedDates }) => (
  <div>
    <BottomBorderDiv>
      <BottomMarginDiv>
        <SmallLetters>{`$${listing.chargePerNight} x ${selectedDates.length} nights`}</SmallLetters>
      </BottomMarginDiv>
      <BottomMarginDiv>
        <SmallLetters>{`$${listing.chargePerNight * selectedDates.length}`}</SmallLetters>
      </BottomMarginDiv>
    </BottomBorderDiv>
  </div>
);

Total.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.number,
    maxGuests: PropTypes.number,
    maxInfants: PropTypes.number,
    chargePerNight: PropTypes.number,
    cleaningFee: PropTypes.number,
    serviceFee: PropTypes.number,
    occupancyFee: PropTypes.number,
    rating: PropTypes.number,
    numberOfRatings: PropTypes.number,
  }).isRequired,
  selectedDates: PropTypes.array.isRequired,
};

export default Total;
