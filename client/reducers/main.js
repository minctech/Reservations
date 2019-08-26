import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';

const { listing } = appReducers;
const { currentMonth, currentYear } = calendarReducers;

const rootReducer = combineReducers({
  listing,
  currentMonth,
  currentYear,
});

export default rootReducer;
