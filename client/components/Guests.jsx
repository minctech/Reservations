import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexDiv = styled.div`
  display: flex;
`;

const NumberDiv = styled(FlexDiv)`
  width: 53px;
  align-items: center;
`;

const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
`;

const FlexSpaceBetweenDiv = styled(FlexDiv)`
  justify-content: space-between;
  margin: 24px 0px; 
`;

const FlexEndDiv = styled(FlexDiv)`
  justify-content: flex-end;
`;

const ClearButton = styled.button`
  border: none;
  margin: 10px;
  font-weight: 500;
  font-size: 13px;
  color: teal;
  :hover {
    text-decoration: underline;
  }
`;

const BigLetters = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const BigNumbers = styled(BigLetters)`
  margin: 0px 22px;
`;

const SmallLetters = styled.span`
  font-size: 14px;
  color: darkslategray;
`;

const OuterContainer = styled.div`
  width: 326px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  border: 1px lightgray solid;
  border-radius: 3px;
  z-index: 1000;
  position: absolute;
  background-color: white;
  top: 341px;
  left: 78px;
`;

const InnerContainer = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
`;

const Guests = ({
  listing,
  selectedAdults,
  selectedChildren,
  selectedInfants,
  changeSelectedAdults,
  changeSelectedChildren,
  changeSelectedInfants,
  maxGuestsReached,
  changeMaxGuestsReached,
}) => {
  if (selectedAdults + selectedChildren === listing.maxGuests) {
    changeMaxGuestsReached(true);
  } else {
    changeMaxGuestsReached(false);
  }

  const Button = styled.button`
    border-radius: 50%;
    color: rgba(0, 132, 137, 0.3);
    height: 32px;
    width: 32px;
  `;

  const PlusButton = styled(Button)`
    border: ${maxGuestsReached ? 'rgba(0, 132, 137, 0.3) solid 1px' : 'rgba(0, 132, 137) solid 1px'};
  `;

  const AdultsMinusButton = styled(Button)`
    border: ${selectedAdults > 1 ? 'rgba(0, 132, 137) solid 1px' : 'rgba(0, 132, 137, 0.3) solid 1px'};
  `;

  return (
    <OuterContainer>
      <InnerContainer>
        <FlexSpaceBetweenDiv>
          <div>
            <BigLetters>Adults</BigLetters>
          </div>
          <FlexDiv>
            <AdultsMinusButton
              type="button"
              onClick={() => {
                if (selectedAdults > 1) {
                  changeSelectedAdults(-1, selectedAdults);
                }
              }}
            >
            -
            </AdultsMinusButton>
            <NumberDiv>
              <BigNumbers>{selectedAdults}</BigNumbers>
            </NumberDiv>
            <PlusButton
              type="button"
              onClick={() => {
                if (!maxGuestsReached) {
                  changeSelectedAdults(1, selectedAdults);
                }
              }}
            >
            +
            </PlusButton>
          </FlexDiv>
        </FlexSpaceBetweenDiv>
        <FlexSpaceBetweenDiv>
          <FlexColumn>
            <BigLetters>Children</BigLetters>
            <SmallLetters>Ages 2–12</SmallLetters>
          </FlexColumn>
          <FlexDiv>
            <Button type="button">-</Button>
            <NumberDiv>
              <BigNumbers>{selectedChildren}</BigNumbers>
            </NumberDiv>
            <Button type="button">+</Button>
          </FlexDiv>
        </FlexSpaceBetweenDiv>
        <FlexSpaceBetweenDiv>
          <FlexColumn>
            <BigLetters>Infants</BigLetters>
            <SmallLetters>Under 2</SmallLetters>
          </FlexColumn>
          <FlexDiv>
            <Button type="button">-</Button>
            <NumberDiv>
              <BigNumbers>{selectedInfants}</BigNumbers>
            </NumberDiv>
            <Button type="button">+</Button>
          </FlexDiv>
        </FlexSpaceBetweenDiv>
        <div>
          <SmallLetters>
            {listing.maxGuests}
            {' '}
            guests maximum. Infants don’t count toward the number of guests.
          </SmallLetters>
        </div>
      </InnerContainer>
      <FlexEndDiv>
        <ClearButton type="button">Close</ClearButton>
      </FlexEndDiv>
    </OuterContainer>
  );
};

Guests.propTypes = {
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
  selectedAdults: PropTypes.number,
  selectedChildren: PropTypes.number,
  selectedInfants: PropTypes.number,
  changeSelectedAdults: PropTypes.func.isRequired,
  changeSelectedChildren: PropTypes.func.isRequired,
  changeSelectedInfants: PropTypes.func.isRequired,
  maxGuestsReached: PropTypes.bool.isRequired,
};

Guests.defaultProps = {
  selectedAdults: 1,
  selectedChildren: 0,
  selectedInfants: 0,
};

export default Guests;
