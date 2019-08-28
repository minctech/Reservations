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

const SelectedDay = styled(Day)`
  background-color: teal;
  color: white;
  :hover {
    cursor: unset;
    background-color: teal;
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
  selectedDates,
  // selectedStartDate,
  // selectedEndDate,
  changeSelectedDates,
  changeStartDateView,
  changeViewCalendar,
}) => {
  const firstDate = new Date(currentYear, currentMonth, 1);
  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const numberOfDays = lastDate.getDate();
  const firstDay = firstDate.getDay();
  const days = [[]];
  const bookedDays = [];
  const highlightedSelectedDays = [];


  // update selectedDates state based on selected start date and selected end date.
  // If statements are used to make sure there is not an infinite loop.
  // if (selectedStartDate && selectedEndDate && selectedDates.length === 0) {
  //   if (selectedStartDate.year <= selectedEndDate.year) {
  //     if (selectedStartDate.month <= selectedEndDate.month) {
  //       if (selectedStartDate.day < selectedEndDate.day) {
  //         const startDate = new Date(
  //           selectedStartDate.year,
  //           selectedStartDate.month,
  //           selectedStartDate.day,
  //         );
  //         const endDate = new Date(
  //           selectedEndDate.year,
  //           selectedEndDate.month,
  //           selectedEndDate.day,
  //         );
  //         const selectedDays = [];
  //         while (startDate.toDateString() !== endDate.toDateString()) {
  //           selectedDays.push({
  //             year: startDate.getFullYear(),
  //             month: startDate.getMonth(),
  //             day: startDate.getDate(),
  //           });
  //           startDate.setDate(startDate.getDate() + 1);
  //         }
  //         selectedDays.push({
  //           year: endDate.getFullYear(),
  //           month: endDate.getMonth(),
  //           day: endDate.getDate(),
  //         });
  //         changeSelectedDates(selectedDays);
  //       }
  //     }
  //   }
  // }

  // create array of booked days for current month
  for (let i = 0; i < bookedDates.length; i++) {
    if (bookedDates[i].year === currentYear && bookedDates[i].month === currentMonth) {
      bookedDays.push(bookedDates[i].date);
    }
  }

  // create array of selected days for current month
  for (let i = 0; i < selectedDates.length; i++) {
    if (selectedDates[i].year === currentYear && selectedDates[i].month === currentMonth) {
      highlightedSelectedDays.push(selectedDates[i].day);
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
    } else if (highlightedSelectedDays.includes(day)) {
      days[week].push(
        <SelectedDay
          className="calendar"
          key={day}
          onClick={() => {
            if (startDateView) {
              changeStartDateView(false);
              changeSelectedStartDate(day, currentMonth, currentYear);
            } else {
              changeSelectedEndDate(day, currentMonth, currentYear);
              changeViewCalendar(false);
            }
            changeSelectedDates();
          }}
        >
          {day}
        </SelectedDay>,
      );
    } else {
      days[week].push(
        <Day
          className="calendar"
          key={day}
          onClick={() => {
            if (startDateView) {
              changeStartDateView(false);
              changeSelectedStartDate(day, currentMonth, currentYear);
            } else {
              changeSelectedEndDate(day, currentMonth, currentYear);
              changeViewCalendar(false);
            }
            changeSelectedDates();
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
  startDateView: PropTypes.bool.isRequired,
  selectedDates: PropTypes.array.isRequired,
  // selectedStartDate: PropTypes.any,
  // selectedEndDate: PropTypes.any,
  changeSelectedDates: PropTypes.func.isRequired,
  changeStartDateView: PropTypes.func.isRequired,
  changeViewCalendar: PropTypes.func.isRequired,
};

// CalendarDates.defaultProps = {
//   selectedStartDate: null,
//   selectedEndDate: null,
// };

export default CalendarDates;
