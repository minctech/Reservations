import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store/store';
import appActions from './actions/App';
// import Main from './components/Main';

class Reservations extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3001/api/dblistings', {
      params: {
        listing: document.URL.split('/').reverse()[1],
      },
    })
      .then((listing) => {
        store.dispatch(appActions.changeListing(listing.data));
      })
      .then(() => {
        axios.get('http://localhost:3001/api/dbbookeddates', {
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
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// ReactDOM.render(
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>,
//   document.getElementById('root'),
//   () => {
//     axios.get('/api/dblistings', {
//       params: {
//         listing: document.URL.split('/').reverse()[1],
//       },
//     })
//       .then((listing) => {
//         store.dispatch(appActions.changeListing(listing.data));
//       })
//       .then(() => {
//         axios.get('/api/dbbookeddates', {
//           params: {
//             listing: document.URL.split('/').reverse()[1],
//           },
//         })
//           .then((bookedDates) => {
//             store.dispatch({
//               type: 'CHANGE_BOOKED_DATES',
//               bookedDates: bookedDates.data,
//             });
//           });
//       })
//       .catch((error) => {
//         console.log('error fetching listing data', error);
//       });
//   },
// );

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
    if (!(e.target.id === 'checkin' || e.target.id === 'checkout' || e.target.className.includes('calendar'))) {
      store.dispatch(appActions.changeViewCalendar(false));
    }
  }
});

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
    if (!e.target.className.includes('guests')) {
      store.dispatch(appActions.changeGuestContainerView(false));
    }
  }
});

document.addEventListener('scroll', () => {
  store.dispatch({
    type: 'CHANGE_Y_AXIS',
    windowY: window.scrollY,
  });
});

export default { Reservations, React, ReactDOM };
