import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import calendarActions from '../actions/Calendar';


const mapStateToProps = (state) => ({
  currentMonth: state.currentMonth,
  currentYear: state.currentYear,
});

const mapDispatchToProps = (dispatch) => ({
  changeMonthHandler: (change, currentMonth, currentYear) => {
    if (change > 0) {
      if (currentMonth === 11) {
        dispatch(calendarActions.changeCurrentYear(currentYear + 1));
        dispatch(calendarActions.changeCurrentMonth(0));
      } else {
        dispatch(calendarActions.changeCurrentMonth(currentMonth + 1));
      }
    } else if (change < 0) {
      if (currentMonth === 0) {
        dispatch(calendarActions.changeCurrentYear(currentYear - 1));
        dispatch(calendarActions.changeCurrentMonth(11));
      } else {
        dispatch(calendarActions.changeCurrentMonth(currentMonth - 1));
      }
    }
  },
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
