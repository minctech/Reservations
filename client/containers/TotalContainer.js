import { connect } from 'react-redux';
import Total from '../components/Total';

const mapStateToProps = (state) => ({
  selectedDates: state.selectedDates,
  listing: state.listing,
});

const TotalContainer = connect(mapStateToProps, null)(Total);

export default TotalContainer;
