import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';

const { listing } = appReducers;
const { currentMonth, currentYear, bookedDates } = calendarReducers;

const rootReducer = combineReducers({
  listing,
  currentMonth,
  currentYear,
  bookedDates,
});

export default rootReducer;
