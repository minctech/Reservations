import { connect } from 'react-redux';
// import axios from 'axios';
import App from '../components/App';

const mapStateToProps = (state) => ({
  listing: state.listing,
});

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
