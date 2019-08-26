import { createStore } from 'redux';
import rootReducer from '../reducers/main';

export default createStore(
  rootReducer,
  {
    listing: {
      maxGuests: 510,
      maxInfants: 3,
      chargePerNight: 150,
      cleaningFee: 10,
      serviceFee: 10,
      occupancyFee: 10,
      rating: 9,
      numberOfRatings: 300,
    },
    currentMonth: 0,
    currentYear: 2019,
  },
);
