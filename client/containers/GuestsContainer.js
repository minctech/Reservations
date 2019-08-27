import { connect } from 'react-redux';
import Guests from '../components/Guests';

const mapStateToProps = (state) => ({
  listing: state.listing,
  guestsSelected: state.guestsSelected,
  infantsSelected: state.infantsSelected,
});

const GuestsContainer = connect(mapStateToProps, null)(Guests);

export default GuestsContainer;
