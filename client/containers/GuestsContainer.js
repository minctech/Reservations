import { connect } from 'react-redux';
import Guests from '../components/Guests';
import actionCreators from '../actions/Guests';

const mapStateToProps = (state) => ({
  listing: state.listing,
  selectedAdults: state.selectedAdults,
  selectedChildren: state.selectedChildren,
  selectedInfants: state.selectedInfants,
  maxGuestsReached: state.maxGuestsReached,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedAdults: (change, currentAdults) => {
    dispatch(actionCreators.changeSelectedAdults(currentAdults + change));
  },
  changeSelectedChildren: (change, currentChildren) => {
    dispatch(actionCreators.changeSelectedChildren(currentChildren + change));
  },
  changeSelectedInfants: (change, currentInfants) => {
    dispatch(actionCreators.changeSelectedInfants(currentInfants + change));
  },
  changeMaxGuestsReached: (boolean) => {
    dispatch(actionCreators.changeMaxGuestsReached(boolean));
  },
});

const GuestsContainer = connect(mapStateToProps, mapDispatchToProps)(Guests);

export default GuestsContainer;
