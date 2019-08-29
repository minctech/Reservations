/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarContainer from '../containers/CalendarContainer';
import GuestsContainer from '../containers/GuestsContainer';
import TotalContainer from '../containers/TotalContainer';


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
  justify-content: space-between;
  align-items: center;
`;

GuestsBox.displayName = 'GuestsBox';

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
  selectedStartDate,
  selectedEndDate,
  guestContainerView,
  changeGuestContainerView,
  selectedAdults,
  selectedChildren,
  selectedInfants,
  selectedDates,
  changeSelectedDates,
}) => {
  const chargePerNight = `$${listing.chargePerNight}`;
  const review = `${listing.numberOfRatings}`;
  const width = `${listing.rating * 10}%`;

  let startCalendar;
  let endCalendar;

  // if user selected a startdate and enddate
  // and there is no current selected length of stay
  // and if end date is after start date
  // create an array of all days between start date and end date
  // including both
  if (selectedStartDate && selectedEndDate && selectedDates.length === 0) {
    if (selectedStartDate.year <= selectedEndDate.year) {
      if (selectedStartDate.month === selectedEndDate.month) {
        if (selectedStartDate.day < selectedEndDate.day) {
          changeSelectedDates(selectedStartDate, selectedEndDate);
        }
      } else if (selectedStartDate.month < selectedEndDate.month) {
        changeSelectedDates(selectedStartDate, selectedEndDate);
      }
    }
  }

  if (viewCalendar) {
    if (startDateView) {
      startCalendar = <CalendarContainer />;
    } else {
      endCalendar = <CalendarContainer />;
    }
  }

  let guestContainer;

  if (guestContainerView) {
    guestContainer = <GuestsContainer />;
  }

  let checkInDate;
  let checkOutDate;

  if (selectedStartDate) {
    checkInDate = `${selectedStartDate.month + 1}/${selectedStartDate.day}/${selectedStartDate.year}`;
  } else {
    checkInDate = 'Check-in';
  }

  if (selectedEndDate) {
    checkOutDate = `${selectedEndDate.month + 1}/${selectedEndDate.day}/${selectedEndDate.year}`;
  } else {
    checkOutDate = 'Checkout';
  }

  let totalContainer;

  if (selectedDates.length > 0) {
    totalContainer = <TotalContainer />;
  }

  let arrow;

  if (guestContainerView) {
    arrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', margin: '10px' }}><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd" /></svg>;
  } else {
    arrow = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', margin: '10px' }}><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" /></svg>;
  }

  const CheckInDate = styled(Dates)`
    background-color: ${viewCalendar && startDateView ? 'paleturquoise' : 'white'};
  `;

  const CheckOutDate = styled(Dates)`
    background-color: ${viewCalendar && !startDateView ? 'paleturquoise' : 'white'};
  `;

  const GuestCount = styled.span`
    fontSize: 17px;
    margin-left: 8px;
    padding: ${guestContainerView ? '5px' : '0px'};
    background-color: ${guestContainerView ? 'paleturquoise' : 'white'};
  `;

  const InfantCount = styled(GuestCount)`
    background-color: white;
    margin-left: 0px;
  `;

  return (
    <OuterContainer>
      {guestContainer}
      {startCalendar}
      {endCalendar}
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
          <CheckInDate
            id="checkin"
            onClick={() => {
              changeStartDateView(true);
              changeViewCalendar(true);
            }}
          >
            {checkInDate}
          </CheckInDate>
          <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '25px', width: '25px', margin: '7px 0' }}>
            <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
          </svg>
          <CheckOutDate
            id="checkout"
            onClick={() => {
              changeStartDateView(false);
              changeViewCalendar(true);
            }}
          >
            {checkOutDate}
          </CheckOutDate>
        </InputBox>
        <Label>Guests</Label>
        <GuestsBox
          className="guests"
          onClick={() => {
            changeGuestContainerView(!guestContainerView);
          }}
        >
          <div>
            <GuestCount
              className="guests"
              onClick={() => {
                changeGuestContainerView(!guestContainerView);
              }}
            >
              {`${selectedAdults + selectedChildren} guest${(selectedAdults + selectedChildren) > 1 ? 's' : ''}`}
            </GuestCount>
            <InfantCount
              className="guests"
              onClick={() => {
                changeGuestContainerView(!guestContainerView);
              }}
            >
              {`${selectedInfants ? ', ' : ''}${selectedInfants || ''}${selectedInfants ? '  infant' : ''}${selectedInfants > 1 ? 's' : ''}`}
            </InfantCount>
          </div>
          {arrow}
        </GuestsBox>
        {totalContainer}
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
  selectedStartDate: PropTypes.any,
  selectedEndDate: PropTypes.any,
  guestContainerView: PropTypes.bool,
  changeGuestContainerView: PropTypes.func.isRequired,
  selectedAdults: PropTypes.number,
  selectedChildren: PropTypes.number,
  selectedInfants: PropTypes.number,
  selectedDates: PropTypes.array,
  changeSelectedDates: PropTypes.func.isRequired,
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
  selectedStartDate: null,
  selectedEndDate: null,
  guestContainerView: false,
  selectedAdults: 1,
  selectedChildren: 0,
  selectedInfants: 0,
  selectedDates: [],
};

export default App;
