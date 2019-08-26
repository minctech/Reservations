import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  listing: state.listing,
  viewCalendar: state.viewCalendar,
  startDateView: state.startDateView,
});

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
