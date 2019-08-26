/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CalendarDates = ({ currentMonth, currentYear, bookedDates }) => {
  const firstDate = new Date(currentYear, currentMonth, 1);
  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const numberOfWeeks = Math.ceil((lastDate.getDate() - (7 - firstDate.getDay())) / 7) + 1;
  console.log(numberOfWeeks);

  return (
    <table>
      <tbody>
        <tr>
          <td>{currentMonth}</td>
        </tr>
        <tr>
          <td>{currentYear}</td>
        </tr>
        <tr>
          <td>whoa</td>
        </tr>
      </tbody>
    </table>
  );
};

CalendarDates.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  bookedDates: PropTypes.array.isRequired,
};

export default CalendarDates;
