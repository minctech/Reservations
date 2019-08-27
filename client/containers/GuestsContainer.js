import { connect } from 'react-redux';
import Guests from '../components/Guests';

const mapStateToProps = (state) => ({
  listing: state.listing,
  adultsSelected: state.adultsSelected,
  childrenSelected: state.childrenSelected,
  infantsSelected: state.infantsSelected,
});

const GuestsContainer = connect(mapStateToProps, null)(Guests);

export default GuestsContainer;
