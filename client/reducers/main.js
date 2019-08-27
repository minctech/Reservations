import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';
import calendarDatesReducers from './CalendarDates';
import guestsReducers from './Guests';

const {
  listing, viewCalendar, startDateView, guestContainerView,
} = appReducers;
const { currentMonth, currentYear, bookedDates } = calendarReducers;
const { selectedEndDate, selectedStartDate, selectedDates } = calendarDatesReducers;
const {
  selectedAdults,
  selectedChildren,
  selectedInfants,
  maxGuestsReached,
} = guestsReducers;

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
  maxGuestsReached,
  guestContainerView,
});

export default rootReducer;
