import { connect } from 'react-redux';
import Guests from '../components/Guests';

const mapStateToProps = (state) => ({
  listing: state.listing,
  selectedAdults: state.selectedAdults,
  selectedChildren: state.selectedChildren,
  selectedInfants: state.selectedInfants,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedAdults: (change) => {

  },
});

const GuestsContainer = connect(mapStateToProps, null)(Guests);

export default GuestsContainer;
