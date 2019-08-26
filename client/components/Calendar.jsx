import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CalendarBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const Button = styled.button`
  height: 35px;
  width: 40px;
  margin: 20px;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const MonthYearSpan = styled.span`
  font-weight: bold;
  margin-top: 25px;
`;

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Calendar = ({ currentMonth, currentYear, changeMonthHandler }) => (
  <CalendarBox>
    <Button type="button" onClick={() => changeMonthHandler(-1, currentMonth, currentYear)}>
      <svg focusable="false" viewBox="0 0 1000 1000" style={{ height: '19px', width: '19px', margin: '0px 0' }}>
        <path d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21   0-32l249-249c21-22 53 10 32 32z" />
      </svg>
    </Button>
    <MonthYearSpan>
      {month[currentMonth]}
      {' '}
      {currentYear}
    </MonthYearSpan>
    <Button type="button" onClick={() => changeMonthHandler(1, currentMonth, currentYear)}>
      <svg focusable="false" viewBox="0 0 1000 1000" style={{ height: '19px', width: '19px', margin: '0px 0' }}>
        <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23   23-23h806L662 275c-21-22 11-54 32-33z" />
      </svg>
    </Button>
  </CalendarBox>
);

Calendar.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  changeMonthHandler: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  currentMonth: 0,
  currentYear: 2019,
};

export default Calendar;
