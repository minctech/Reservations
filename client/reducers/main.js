import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';

const { listing } = appReducers;
const { currentMonth } = calendarReducers;

const rootReducer = combineReducers({
  listing,
  currentMonth,
});

export default rootReducer;
