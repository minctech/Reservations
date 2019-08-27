import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';
import calendarDatesReducers from './CalendarDates';

const { listing, viewCalendar, startDateView } = appReducers;
const { currentMonth, currentYear, bookedDates } = calendarReducers;
const { selectedEndDate, selectedStartDate, selectedDates } = calendarDatesReducers;

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
});

export default rootReducer;
