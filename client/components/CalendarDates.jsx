/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Day = styled.td`
  width: 41px;
  height: 40px;
  border: 1px double rgb(228, 231, 231);
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const BookedDay = styled(Day)`
  color: rgb(216, 216, 216);
  text-decoration: line-through;
  :hover {
    cursor: unset;
    background-color: white;
  }
`;

const Table = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
  margin: 0 auto;
`;

const CalendarDates = ({
  currentMonth,
  currentYear,
  bookedDates,
  changeSelectedStartDate,
  changeSelectedEndDate,
  startDateView,
}) => {
  const firstDate = new Date(currentYear, currentMonth, 1);
  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const numberOfDays = lastDate.getDate();
  const firstDay = firstDate.getDay();
  const days = [[]];
  const bookedDays = [];

  // create array of booked days for current month
  for (let i = 0; i < bookedDates.length; i++) {
    if (bookedDates[i].year === currentYear && bookedDates[i].month === currentMonth) {
      bookedDays.push(bookedDates[i].date);
    }
  }

  // push in null td for days not within this month
  for (let i = 0; i < firstDay; i++) {
    days[0].push(<td className="calendar" key={`null${i}`} />);
  }

  // map out the days over the calendar
  let week = 0;
  for (let day = 1; day <= numberOfDays; day++) {
    if (days[week].length === 7) {
      week++;
    }
    if (!days[week]) {
      days[week] = [];
    }
    if (bookedDays.includes(day)) {
      days[week].push(<BookedDay className="calendar" key={day}>{day}</BookedDay>);
    } else {
      days[week].push(
        <Day
          className="calendar"
          key={day}
          onClick={() => {
            if (CheckInView) {
              changeSelectedStartDate(day, currentMonth, currentYear);
            } else {
              changeSelectedEndDate(day, currentMonth, currentYear);
            }
          }}
        >
          {day}
        </Day>,
      );
    }
  }

  // create table row per week
  const tableBody = days.map((row, index) => <tr key={index}>{row}</tr>);

  return (
    <Table className="calendar">
      <tbody className="calendar">
        {tableBody}
      </tbody>
    </Table>
  );
};

CalendarDates.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  bookedDates: PropTypes.array.isRequired,
  changeSelectedStartDate: PropTypes.func.isRequired,
  changeSelectedEndDate: PropTypes.func.isRequired,
};

export default CalendarDates;
