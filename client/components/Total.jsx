/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexDiv = styled.div`
  display: flex;
`;

const FlexSpaceBetweenDiv = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 24px; 
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

const Total = ({ listing, selectedDates }) => {
  let cleaningFee;

  if (listing.cleaningFee) {
    cleaningFee = (
      <BottomBorderDiv>
        <BottomMarginDiv>
          <SmallLetters>Cleaning fee</SmallLetters>
        </BottomMarginDiv>
        <BottomMarginDiv>
          <SmallLetters>{`$${listing.cleaningFee}`}</SmallLetters>
        </BottomMarginDiv>
      </BottomBorderDiv>
    );
  }

  let serviceFee;

  if (listing.serviceFee) {
    serviceFee = (
      <BottomBorderDiv>
        <BottomMarginDiv>
          <SmallLetters>Service fee</SmallLetters>
        </BottomMarginDiv>
        <BottomMarginDiv>
          <SmallLetters>{`$${listing.serviceFee}`}</SmallLetters>
        </BottomMarginDiv>
      </BottomBorderDiv>
    );
  }

  let occupancyFee;

  if (listing.occupancyFee) {
    occupancyFee = (
      <BottomBorderDiv>
        <BottomMarginDiv>
          <SmallLetters>Occupancy taxes and fees</SmallLetters>
        </BottomMarginDiv>
        <BottomMarginDiv>
          <SmallLetters>{`$${listing.occupancyFee}`}</SmallLetters>
        </BottomMarginDiv>
      </BottomBorderDiv>
    );
  }

  const total = `$${((listing.chargePerNight * selectedDates.length)
    + listing.cleaningFee + listing.serviceFee + listing.occupancyFee).toLocaleString()}`;

  return (
    <div>
      <BottomBorderDiv style={{ marginTop: '24px' }}>
        <BottomMarginDiv>
          <SmallLetters>{`$${listing.chargePerNight} x ${selectedDates.length} nights`}</SmallLetters>
        </BottomMarginDiv>
        <BottomMarginDiv>
          <SmallLetters>{`$${listing.chargePerNight * selectedDates.length}`}</SmallLetters>
        </BottomMarginDiv>
      </BottomBorderDiv>
      {cleaningFee}
      {serviceFee}
      {occupancyFee}
      <FlexSpaceBetweenDiv style={{ marginBottom: '0px' }}>
        <BottomMarginDiv>
          <SmallBoldLetters>Total</SmallBoldLetters>
        </BottomMarginDiv>
        <BottomMarginDiv>
          <SmallBoldLetters>
            {total}
          </SmallBoldLetters>
        </BottomMarginDiv>
      </FlexSpaceBetweenDiv>
    </div>
  );
};

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
