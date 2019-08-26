import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';
import calendarDatesReducers from './CalendarDates';

const { listing } = appReducers;
const { currentMonth, currentYear, bookedDates } = calendarReducers;
const { selectedEndDate, selectedStartDate } = calendarDatesReducers;

const rootReducer = combineReducers({
  listing,
  currentMonth,
  currentYear,
  bookedDates,
  selectedEndDate,
  selectedStartDate,
});

export default rootReducer;
