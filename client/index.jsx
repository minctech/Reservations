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
      .then(() => {
        axios.get('/api/dbbookeddates', {
          params: {
            listing: document.URL.split('/').reverse()[1],
          },
        })
          .then((bookedDates) => {
            store.dispatch({
              type: 'CHANGE_BOOKED_DATES',
              bookedDates: bookedDates.data,
            });
          });
      })
      .catch((error) => {
        console.log('error fetching listing data', error);
      });
  },
);

document.addEventListener('click', (e) => {
  console.log(e.target);
  if (!(e.target.id === 'checkin' || e.target.id === 'checkout' || e.target.className.includes('calendar'))) {
    store.dispatch(appActions.changeViewCalendar(false));
  }
});
