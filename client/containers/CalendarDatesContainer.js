/* eslint-disable no-plusplus */
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
  viewCalendar: state.viewCalendar,
  hoverHighlightedDates: state.hoverHighlightedDates,
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
    dispatch(appActionCreators.changeStartDateView(boolean));
  },
  changeViewCalendar: (boolean) => {
    dispatch(appActionCreators.changeViewCalendar(boolean));
  },
  changeHoverHighlightedDates: (start, end) => {
    const hoverHighlightedDays = [];
    for (let i = start; i <= end; i++) {
      hoverHighlightedDays.push(i);
    }
    dispatch(actionCreators.changeHoverHighlightedDates(hoverHighlightedDays));
  },
});

const CalendarDatesContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarDates);

export default CalendarDatesContainer;
