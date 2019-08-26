/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CalendarDates = ({ currentMonth, currentYear, bookedDates }) => (
  <table>
    <tbody>
      <tr>
        <td>{currentMonth}</td>
      </tr>
      <tr>
        <td>{currentYear}</td>
      </tr>
      <tr>
        <td>{bookedDates}</td>
      </tr>
    </tbody>
  </table>
);

CalendarDates.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  bookedDates: PropTypes.array.isRequired,
};

export default CalendarDates;
