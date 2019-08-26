/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CalendarDates = ({ currentMonth, currentYear, bookedDates }) => {
  const firstDate = new Date(currentYear, currentMonth, 1);
  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const numberOfDays = lastDate.getDate();
  const firstDay = firstDate.getDay();
  const numberOfWeeks = Math.ceil((numberOfDays - (7 - firstDay)) / 7) + 1;
  const days = [[]];


  for (let i = 0; i < firstDay; i++) {
    days[0].push(<td key={`null${i}`}></td>);
  }

  let week = 0;
  for (let day = 1; day <= numberOfDays; day++) {
    if (days[week].length === 7) {
      week++;
    }
    if (!days[week]) {
      days[week] = [];
    }
    days[week].push(<td key={day}>{day}</td>);
  }

  let tableBody = days.map((row, index) => {
    return <tr key={index}>{row}</tr>
  });

  return (
    <table>
      <tbody>
        {tableBody}
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
