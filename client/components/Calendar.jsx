import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarDatesContainer from '../containers/CalendarDatesContainer';

const CalendarBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 3px;
  width: 333px;
  height: 381px;
  z-index: 1000;
  position: absolute;
  background-color: white;
  top: 285px;
  left: 77px;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClearDatesBox = styled(HeaderBox)`
  justify-content: flex-end;
`;

const ClearDatesButton = styled.button`
  border: none;
  margin: 20px 10px;
  font-weight: 500;
  font-size: 13px;
  color: teal;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

ClearDatesButton.displayName = 'ClearDatesButton';

const Button = styled.button`
  height: 35px;
  width: 40px;
  margin: 20px;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

Button.displayName = 'Button';

const MonthYearSpan = styled.span`
  font-weight: bold;
  margin-top: 25px;
`;

const DayBox = styled(HeaderBox)`
  margin: 10px 25px;
`;

const Day = styled.small`
  color: rgb(117, 117, 117);
  font-weight: 600;
`;

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Calendar = ({
  currentMonth,
  currentYear,
  changeMonthHandler,
  changeSelectedStartDate,
  changeSelectedEndDate,
  changeSelectedDates,
}) => (
  <CalendarBox className="calendar">
    <HeaderBox className="calendar">
      <Button className="calendar" type="button" onClick={() => changeMonthHandler(-1, currentMonth, currentYear)}>
        <svg className="calendar" focusable="false" viewBox="0 0 1000 1000" style={{ height: '19px', width: '19px', margin: '0px 0' }}>
          <path className="calendar" d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21   0-32l249-249c21-22 53 10 32 32z" />
        </svg>
      </Button>
      <MonthYearSpan className="calendar">
        {month[currentMonth]}
        {' '}
        {currentYear}
      </MonthYearSpan>
      <Button className="calendar" type="button" onClick={() => changeMonthHandler(1, currentMonth, currentYear)}>
        <svg className="calendar" focusable="false" viewBox="0 0 1000 1000" style={{ height: '19px', width: '19px', margin: '0px 0' }}>
          <path className="calendar" d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23   23-23h806L662 275c-21-22 11-54 32-33z" />
        </svg>
      </Button>
    </HeaderBox>
    <DayBox className="calendar">
      <Day className="calendar">Su</Day>
      <Day className="calendar">Mo</Day>
      <Day className="calendar">Tu</Day>
      <Day className="calendar">We</Day>
      <Day className="calendar">Th</Day>
      <Day className="calendar">Fr</Day>
      <Day className="calendar">Sa</Day>
    </DayBox>
    <CalendarDatesContainer />
    <ClearDatesBox>
      <ClearDatesButton
        type="button"
        onClick={() => {
          changeSelectedStartDate();
          changeSelectedEndDate();
          changeSelectedDates();
        }}
      >
        Clear dates
      </ClearDatesButton>
    </ClearDatesBox>
  </CalendarBox>
);

Calendar.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  changeMonthHandler: PropTypes.func.isRequired,
  changeSelectedEndDate: PropTypes.func.isRequired,
  changeSelectedStartDate: PropTypes.func.isRequired,
  changeSelectedDates: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  currentMonth: 0,
  currentYear: 2019,
};

export default Calendar;
