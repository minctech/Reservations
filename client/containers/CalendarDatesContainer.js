import { connect } from 'react-redux';
import CalendarDates from '../components/CalendarDates';
import actionCreators from '../actions/CalendarDates';
import appActionCreators from '../actions/App';

const mapStateToProps = (state) => ({
  currentMonth: state.currentMonth,
  currentYear: state.currentYear,
  bookedDates: state.bookedDates,
  selectedStartDate: state.selectedStartDate,
  selectedEndDate: state.selectedEndDate,
  startDateView: state.startDateView,
  selectedDates: state.selectedDates,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedStartDate: (day, month, year) => {
    dispatch(actionCreators.changeSelectedStartDate({ day, month, year }));
  },
  changeSelectedEndDate: (day, month, year) => {
    dispatch(actionCreators.changeSelectedEndDate({ day, month, year }));
  },
  changeSelectedDates: (dates) => {
    dispatch(actionCreators.changeSelectedDates(dates));
  },
  changeStartDateView: (boolean) => {
    console.log('firing');
    dispatch(appActionCreators.changeStartDateView(boolean));
  },
});

const CalendarDatesContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarDates);

export default CalendarDatesContainer;
