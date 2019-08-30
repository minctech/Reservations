/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-lonely-if */
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

Day.displayName = 'Day';

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

const HoveredDay = styled(Day)`
  background-color: rgb(178, 241, 236);
  color: white;
  :hover {
    cursor: pointer;
    background-color: rgb(178, 241, 236);
  }
`;

SelectedDay.displayName = 'SelectedDay';

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
  selectedStartDate,
  selectedEndDate,
  changeSelectedDates,
  changeStartDateView,
  changeViewCalendar,
  changeHoverHighlightedDates,
  hoverHighlightedDates,
}) => {
  const firstDate = new Date(currentYear, currentMonth, 1);
  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const numberOfDays = lastDate.getDate();
  const firstDay = firstDate.getDay();
  const days = [[]];
  const bookedDays = [];
  const highlightedSelectedDays = [];
  const startDate = {};
  const endDate = {};
  let firstBookedDayAfterSelectedStartDate = {};

  // assign startdate to local variable for later rendering
  if (selectedStartDate) {
    Object.assign(startDate, selectedStartDate);
  }

  // assign startdate to local variable for later rendering
  if (selectedEndDate) {
    Object.assign(endDate, selectedEndDate);
  }

  // logic to find first booked date after selecting a start date
  if (!startDateView && selectedStartDate) {
    const bookedDaysAfterSelectedStartDate = [];
    const dateObjectCreator = (date) => new Date(date.year, date.month, date.date);

    for (let i = 0; i < bookedDates.length; i++) {
      if (bookedDates[i].year > selectedStartDate.year) {
        bookedDaysAfterSelectedStartDate.push(dateObjectCreator(bookedDates[i]));
      } else if (bookedDates[i].year === selectedStartDate.year) {
        if (bookedDates[i].month > selectedStartDate.month) {
          bookedDaysAfterSelectedStartDate.push(dateObjectCreator(bookedDates[i]));
        } else if (bookedDates[i].month === selectedStartDate.month
          && bookedDates[i].date > selectedStartDate.day) {
          bookedDaysAfterSelectedStartDate.push(dateObjectCreator(bookedDates[i]));
        }
      }
    }

    // check if there is any booked days after selected start date
    if (bookedDaysAfterSelectedStartDate.length > 0) {
      bookedDaysAfterSelectedStartDate.sort((a, b) => (a < b ? -1 : 1));
      firstBookedDayAfterSelectedStartDate = {
        year: bookedDaysAfterSelectedStartDate[0].getFullYear(),
        month: bookedDaysAfterSelectedStartDate[0].getMonth(),
        day: bookedDaysAfterSelectedStartDate[0].getDate(),
      };
    }
  }

  // helper function to gray out days
  const grayDaysFromStartToEnd = (start, end) => {
    for (let i = start; i <= end; i++) {
      bookedDays.push(i);
    }
  };

  // create array of booked days for current month
  if (startDateView) {
    for (let i = 0; i < bookedDates.length; i++) {
      if (bookedDates[i].year === currentYear && bookedDates[i].month === currentMonth) {
        bookedDays.push(bookedDates[i].date);
      }
    }
  } else if (selectedStartDate) { // selecting end date
    if (currentYear < startDate.year) {
      grayDaysFromStartToEnd(1, numberOfDays);
    } else if (currentYear === startDate.year) {
      if (currentMonth < startDate.month) {
        grayDaysFromStartToEnd(1, numberOfDays);
      } else if (currentMonth === startDate.month) {
        grayDaysFromStartToEnd(1, startDate.day - 1);
      }
    }

    // gray out days after first booked day only if there is a booked day after selected start date
    if (firstBookedDayAfterSelectedStartDate.day) {
      if (currentYear > firstBookedDayAfterSelectedStartDate.year) {
        grayDaysFromStartToEnd(1, numberOfDays);
      } else if (currentYear === firstBookedDayAfterSelectedStartDate.year) {
        if (currentMonth > firstBookedDayAfterSelectedStartDate.month) {
          grayDaysFromStartToEnd(1, numberOfDays);
        } else if (currentMonth === firstBookedDayAfterSelectedStartDate.month) {
          grayDaysFromStartToEnd(firstBookedDayAfterSelectedStartDate.day, numberOfDays);
        }
      }
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

    // logic to decide which days are greyed out,
    // which are normal,
    // and which are highlighted.
    if (bookedDays.includes(day)) {
      days[week].push(
        <BookedDay
          className="calendar"
          key={day}
          onMouseOut={() => {
            changeHoverHighlightedDates(0, 0);
          }}
        >
          {day}
        </BookedDay>,
      );
    } else if (startDate.day === day
      && currentMonth === startDate.month && currentYear === startDate.year) {
      days[week].push(
        <SelectedDay
          className="calendar"
          key={day}
          onMouseOut={() => {
            changeHoverHighlightedDates(0, 0);
          }}
        >
          {day}
        </SelectedDay>,
      );
    } else if (endDate.day === day
      && currentMonth === endDate.month && currentYear === endDate.year) {
      days[week].push(
        <SelectedDay
          className="calendar"
          key={day}
          onMouseOut={() => {
            changeHoverHighlightedDates(0, 0);
          }}
        >
          {day}
        </SelectedDay>,
      );
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
              changeHoverHighlightedDates(0, 0);
            }
            changeSelectedDates();
          }}
          onMouseOut={() => {
            changeHoverHighlightedDates(0, 0);
          }}
        >
          {day}
        </SelectedDay>,
      );
    } else if (hoverHighlightedDates.includes(day)) {
      days[week].push(
        <HoveredDay // fix this
          className="calendar"
          key={day}
          onClick={() => {
            if (startDateView) {
              changeStartDateView(false);
              changeSelectedStartDate(day, currentMonth, currentYear);
            } else {
              changeSelectedEndDate(day, currentMonth, currentYear);
              changeViewCalendar(false);
              changeHoverHighlightedDates(0, 0);
            }
            changeSelectedDates();
          }}

          onMouseOut={() => {
            changeHoverHighlightedDates(0, 0);
          }}
        >
          {day}
        </HoveredDay>,
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
              changeHoverHighlightedDates(0, 0);
            }
            changeSelectedDates();
          }}

          onMouseOver={() => {
            if (!(selectedStartDate && selectedEndDate)) {
              if (selectedStartDate) {
                if (currentYear > selectedStartDate.year) {
                  changeHoverHighlightedDates(1, numberOfDays);
                } else if (currentYear === selectedStartDate.year) {
                  if (currentMonth > selectedStartDate.month) {
                    changeHoverHighlightedDates(1, numberOfDays);
                  } else if (currentMonth === selectedStartDate.month
                    && day > selectedStartDate.day) {
                    changeHoverHighlightedDates(selectedStartDate.day + 1, day);
                  }
                }
              } else if (selectedEndDate) {
                if (currentYear < selectedEndDate.year) {
                  changeHoverHighlightedDates(1, numberOfDays);
                } else if (currentYear === selectedEndDate.year) {
                  if (currentMonth < selectedEndDate.month) {
                    changeHoverHighlightedDates(1, numberOfDays);
                  } else if (currentMonth === selectedEndDate.month
                    && day < selectedEndDate.day) {
                    changeHoverHighlightedDates(day, selectedEndDate.day - 1);
                  }
                }
              }
            }
          }}

          onMouseOut={() => {
            changeHoverHighlightedDates(0, 0);
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
  selectedStartDate: PropTypes.any,
  selectedEndDate: PropTypes.any,
  changeSelectedDates: PropTypes.func.isRequired,
  changeStartDateView: PropTypes.func.isRequired,
  changeViewCalendar: PropTypes.func.isRequired,
  changeHoverHighlightedDates: PropTypes.func.isRequired,
  hoverHighlightedDates: PropTypes.array.isRequired,
};

CalendarDates.defaultProps = {
  selectedStartDate: null,
  selectedEndDate: null,
};

export default CalendarDates;
