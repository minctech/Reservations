import { combineReducers } from 'redux';
import appReducers from './App';
import calendarReducers from './Calendar';
import calendarDatesReducers from './CalendarDates';
import guestsReducers from './Guests';

const {
  listing, viewCalendar, startDateView, guestContainerView,
} = appReducers;
const { currentMonth, currentYear, bookedDates } = calendarReducers;
const {
  selectedEndDate, selectedStartDate, selectedDates, hoverHighlightedDates,
} = calendarDatesReducers;
const {
  selectedAdults,
  selectedChildren,
  selectedInfants,
  maxGuestsReached,
} = guestsReducers;

const windowY = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_Y_AXIS':
      return action.windowY || 0;
    default:
      return state;
  }
};

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
  hoverHighlightedDates,
  windowY,
});

export default rootReducer;
