import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';
import calendarDatesReducers from './CalendarDates';
import guestsReducers from './Guests';

const { listing, viewCalendar, startDateView } = appReducers;
const { currentMonth, currentYear, bookedDates } = calendarReducers;
const { selectedEndDate, selectedStartDate, selectedDates } = calendarDatesReducers;
const { selectedAdults, selectedChildren, selectedInfants } = guestsReducers;

const rootReducer = combineReducers({
  listing,
  currentMonth,
  currentYear,
  bookedDates,
  selectedEndDate,
  selectedStartDate,
  viewCalendar,
  startDateView,
  selectedDates,
  selectedAdults,
  selectedChildren,
  selectedInfants,
});

export default rootReducer;
