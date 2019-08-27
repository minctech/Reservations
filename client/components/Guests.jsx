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

const Button = styled.button`
  border-radius: 50%;
  color: rgba(0, 132, 137, 0.3);
  border: rgba(0, 132, 137, 0.3) solid 1px
  height: 32px;
  width: 32px;
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

  const PlusButton = styled(Button)`
    border: ${maxGuestsReached ? 'rgba(0, 132, 137, 0.3) solid 1px' : 'rgba(0, 132, 137) solid 1px'};
    color: ${maxGuestsReached ? 'rgba(0, 132, 137, 0.3)' : 'rgba(0, 132, 137)'};
  `;

  const AdultsMinusButton = styled(Button)`
    border: ${selectedAdults > 1 ? 'rgba(0, 132, 137) solid 1px' : 'rgba(0, 132, 137, 0.3) solid 1px'};
    color: ${selectedAdults > 1 ? 'rgba(0, 132, 137)' : 'rgba(0, 132, 137, 0.3)'};
  `;

  const ChildrenMinusButton = styled(Button)`
    border: ${selectedChildren > 0 ? 'rgba(0, 132, 137) solid 1px' : 'rgba(0, 132, 137, 0.3) solid 1px'};
    color: ${selectedChildren > 0 ? 'rgba(0, 132, 137)' : 'rgba(0, 132, 137, 0.3)'};
  `;

  const InfantsMinusButton = styled(Button)`
    border: ${selectedInfants > 0 ? 'rgba(0, 132, 137) solid 1px' : 'rgba(0, 132, 137, 0.3) solid 1px'};
    color: ${selectedInfants > 0 ? 'rgba(0, 132, 137)' : 'rgba(0, 132, 137, 0.3)'};
  `;

  const InfantsPlusButton = styled(Button)`
    border: ${selectedInfants === listing.maxInfants ? 'rgba(0, 132, 137, 0.3) solid 1px' : 'rgba(0, 132, 137) solid 1px'};
    color: ${selectedInfants === listing.maxInfants ? 'rgba(0, 132, 137, 0.3)' : 'rgba(0, 132, 137)'};
  `;

  return (
    <OuterContainer className="guests">
      <InnerContainer className="guests">
        <FlexSpaceBetweenDiv className="guests">
          <div className="guests">
            <BigLetters className="guests">Adults</BigLetters>
          </div>
          <FlexDiv className="guests">
            <AdultsMinusButton
              className="guests"
              type="button"
              onClick={() => {
                if (selectedAdults > 1) {
                  changeSelectedAdults(-1, selectedAdults);
                }
              }}
            >
            -
            </AdultsMinusButton>
            <NumberDiv className="guests">
              <BigNumbers>{selectedAdults}</BigNumbers>
            </NumberDiv>
            <PlusButton
              className="guests"
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
        <FlexSpaceBetweenDiv className="guests">
          <FlexColumn className="guests">
            <BigLetters className="guests">Children</BigLetters>
            <SmallLetters className="guests">Ages 2–12</SmallLetters>
          </FlexColumn>
          <FlexDiv className="guests">
            <ChildrenMinusButton
              className="guests"
              type="button"
              onClick={() => {
                if (selectedChildren > 0) {
                  changeSelectedChildren(-1, selectedChildren);
                }
              }}
            >
            -
            </ChildrenMinusButton>
            <NumberDiv className="guests">
              <BigNumbers className="guests">{selectedChildren}</BigNumbers>
            </NumberDiv>
            <PlusButton
              className="guests"
              type="button"
              onClick={() => {
                if (!maxGuestsReached) {
                  changeSelectedChildren(1, selectedChildren);
                }
              }}
            >
            +
            </PlusButton>
          </FlexDiv>
        </FlexSpaceBetweenDiv>
        <FlexSpaceBetweenDiv className="guests">
          <FlexColumn className="guests">
            <BigLetters className="guests">Infants</BigLetters>
            <SmallLetters className="guests">Under 2</SmallLetters>
          </FlexColumn>
          <FlexDiv className="guests">
            <InfantsMinusButton
              className="guests"
              type="button"
              onClick={() => {
                if (selectedInfants > 0) {
                  changeSelectedInfants(-1, selectedInfants);
                }
              }}
            >
            -
            </InfantsMinusButton>
            <NumberDiv className="guests">
              <BigNumbers className="guests">{selectedInfants}</BigNumbers>
            </NumberDiv>
            <InfantsPlusButton
              className="guests"
              type="button"
              onClick={() => {
                if (selectedInfants < listing.maxInfants) {
                  changeSelectedInfants(1, selectedInfants);
                }
              }}
            >
            +
            </InfantsPlusButton>
          </FlexDiv>
        </FlexSpaceBetweenDiv>
        <div className="guests">
          <SmallLetters className="guests">
            {listing.maxGuests}
            {' '}
            guests maximum. Infants don’t count toward the number of guests.
          </SmallLetters>
        </div>
      </InnerContainer>
      <FlexEndDiv className="guests">
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
  changeMaxGuestsReached: PropTypes.func.isRequired,
};

Guests.defaultProps = {
  selectedAdults: 1,
  selectedChildren: 0,
  selectedInfants: 0,
};

export default Guests;
