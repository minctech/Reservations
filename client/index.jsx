import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import axios from 'axios';

axios.get('/api/dblistings', {
  params: {
    listing: 1,
  }
})
  .then((listing) => {
    ReactDOM.render(<App listing={listing.data}/>, document.getElementById('root'));
  })
  .catch((error) => {
    console.log('error fetching listing data', error);
  });
  