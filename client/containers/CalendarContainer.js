import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

const mapStateToProps = (state) => ({
  currentMonth: state.currentMonth,
});

const CalendarContainer = connect(mapStateToProps, null)(Calendar);

export default CalendarContainer;
