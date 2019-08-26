import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarContainer from '../containers/CalendarContainer';

const Flex = styled.div`
  display: flex;
`;

const FlexJustifyCenter = styled(Flex)`
  justify-content: center;
`;

const StarRatings = styled.span`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size 14px;
  unicode-bidi: bidi-override;
  color: gray;
  height: 25px;
  width: 62px;
  position: relative;
  margin-right: 5px;
`;

const TopStars = styled(StarRatings)`
  color: teal;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const BottomStars = styled(StarRatings)`
  padding: 0;
  display: block;
  z-index: 0;
`;

// outercontainer top should be 75px
// position should be: position: fixed;
const OuterContainer = styled.div`
  top: 150px;
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

const StaticWord = styled.span`
  margin-right: 5px;
  font-size 14px;
`;

const Cost = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin-right: 5px;
`;

const Seperator = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const InputBox = styled.div`  
  border: 1px solid lightgray;
  height: 42px;
  display: flex;
  margin-bottom: 8px;
`;

const GuestsBox = styled.button`
  border: 1px solid lightgray;
  height: 42px;
  display: flex;
  margin-bottom: 8px;
  font-size: 17px;
`;

const ReserveButton = styled(GuestsBox)`
  background-color: rgb(255, 90, 95);
  margin-top: 24px;
  border-radius: 4px;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const ReserveWord = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: white;
`;

const Dates = styled.div`
  padding: 0 6px;
  border-radius: 3px;
  font-size: 17px;
  margin: 10px 8px;
  width: 130px;
  display: inline-block;
`;

const App = ({
  listing,
  changeViewCalendar,
  changeStartDateView,
  viewCalendar,
  startDateView,
}) => {
  const chargePerNight = `$${listing.chargePerNight}`;
  const review = `${listing.numberOfRatings}`;
  const width = `${listing.rating * 10}%`;

  let startCalendar;
  let endCalendar;

  if (viewCalendar) {
    if (startDateView) {
      startCalendar = <CalendarContainer />;
    } else {
      endCalendar = <CalendarContainer />;
    }
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <Cost>{chargePerNight}</Cost>
          <StaticWord>per night</StaticWord>
        </div>
        <Flex>
          <StarRatings>
            <TopStars style={{ width }}>
              <span>★★★★★</span>
            </TopStars>
            <BottomStars>
              <span>★★★★★</span>
            </BottomStars>
          </StarRatings>
          <StaticWord>{review}</StaticWord>
        </Flex>
        <Seperator />
        <Label>Dates</Label>
        <InputBox>
          <Dates
            id="checkin"
            onClick={() => {
              changeStartDateView(true);
              changeViewCalendar(true);
            }}
          >
          Check-in
            {startCalendar}
          </Dates>
          <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '25px', width: '25px', margin: '7px 0' }}>
            <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
          </svg>
          <Dates
            id="checkout"
            onClick={() => {
              changeStartDateView(false);
              changeViewCalendar(true);
            }}
          >
          Checkout
            {endCalendar}
          </Dates>
        </InputBox>
        <Label>Guests</Label>
        <GuestsBox>
          <span style={{ fontSize: '17px', marginLeft: '8px' }}>1 guest</span>
        </GuestsBox>
        <ReserveButton>
          <ReserveWord>Reserve</ReserveWord>
        </ReserveButton>
        <FlexJustifyCenter>
          <Label>You won’t be charged yet</Label>
        </FlexJustifyCenter>
      </InnerContainer>
    </OuterContainer>
  );
};

App.propTypes = {
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
  }),
  changeStartDateView: PropTypes.func.isRequired,
  changeViewCalendar: PropTypes.func.isRequired,
  viewCalendar: PropTypes.bool,
  startDateView: PropTypes.bool,
};

App.defaultProps = {
  listing: {
    id: 0,
    maxGuests: 5,
    maxInfants: 3,
    chargePerNight: 150,
    cleaningFee: 10,
    serviceFee: 10,
    occupancyFee: 10,
    rating: 9,
    numberOfRatings: 300,
  },
  viewCalendar: false,
  startDateView: false,
};

export default App;
