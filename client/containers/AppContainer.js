import { connect } from 'react-redux';
import App from '../components/App';
import actionCreators from '../actions/App';
import calendarDatesActionCreators from '../actions/CalendarDates';

const mapStateToProps = (state) => ({
  listing: state.listing,
  viewCalendar: state.viewCalendar,
  startDateView: state.startDateView,
  selectedStartDate: state.selectedStartDate,
  selectedEndDate: state.selectedEndDate,
  guestContainerView: state.guestContainerView,
  selectedAdults: state.selectedAdults,
  selectedChildren: state.selectedChildren,
  selectedInfants: state.selectedInfants,
  selectedDates: state.selectedDates,
});

const mapDispatchToProps = (dispatch) => ({
  changeStartDateView: (boolean) => {
    dispatch(actionCreators.changeStartDateView(boolean));
  },
  changeViewCalendar: (boolean) => {
    dispatch(actionCreators.changeViewCalendar(boolean));
  },
  changeGuestContainerView: (boolean) => {
    dispatch(actionCreators.changeGuestContainerView(boolean));
  },
  changeSelectedDates: (dates) => {
    dispatch(calendarDatesActionCreators.changeSelectedDates(dates));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
