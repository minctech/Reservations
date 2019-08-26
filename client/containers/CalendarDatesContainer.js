import { connect } from 'react-redux';
import CalendarDates from '../components/CalendarDates';

const mapStateToProps = (state) => ({
  currentMonth: state.currentMonth,
  currentYear: state.currentYear,
});

const CalendarDatesContainer = connect(mapStateToProps, null)(CalendarDates);

export default CalendarDatesContainer;
