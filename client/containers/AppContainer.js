import { connect } from 'react-redux';
// import axios from 'axios';
import App from '../components/App';

const mapStateToProps = (state) => ({
  listing: state.listing,
});

// const mapDispatchToProps = (dispatch) => {
//   axios.get('/api/dblistings', {
//     params: {
//       listing: 1,
//     },
//   })
//     .then((listing) => {
//       dispatch(listing);
//     })
//     .catch((error) => {
//       console.log('error fetching listing data', error);
//     });
// };

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
