import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import calendarActions from '../actions/Calendar';
import actionCreators from '../actions/CalendarDates';


const mapStateToProps = (state) => ({
  currentMonth: state.currentMonth,
  currentYear: state.currentYear,
  viewCalendar: state.viewCalendar,
  selectedStartDate: state.selectedStartDate,
  selectedEndDate: state.selectedEndDate,
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
  changeSelectedStartDate: () => {
    dispatch(actionCreators.changeSelectedStartDate());
  },
  changeSelectedEndDate: () => {
    dispatch(actionCreators.changeSelectedEndDate());
  },
  changeSelectedDates: (dates) => {
    dispatch(actionCreators.changeSelectedDates(dates));
  },
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
