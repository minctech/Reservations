import { connect } from 'react-redux';
import App from '../components/App';
import actionCreators from '../actions/App';

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
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
