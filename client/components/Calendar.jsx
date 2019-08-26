import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CalendarBox = styled.div`
  height: 300px;
`;

const Calendar = ({ currentMonth }) => (
  <CalendarBox>{currentMonth}</CalendarBox>
);

Calendar.propTypes = {
  currentMonth: PropTypes.number,
};

Calendar.defaultProps = {
  currentMonth: 0,
};

export default Calendar;
