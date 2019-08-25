import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store/store';
import appActions from './actions/App';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
  () => {
    axios.get('/api/dblistings', {
      params: {
        listing: document.URL.split('/').reverse()[1],
      },
    })
      .then((listing) => {
        store.dispatch(appActions.changeListing(listing.data));
      })
      .catch((error) => {
        console.log('error fetching listing data', error);
      });
  },
);
