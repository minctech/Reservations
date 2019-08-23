import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';

axios.get('/api/dblistings', {
  params: {
    listing: 1,
  },
})
  .then((listing) => {
    ReactDOM.render(<App listing={listing.data} />, document.getElementById('root'));
  })
  .catch((error) => {
    console.log('error fetching listing data', error);
  });
