import { createStore } from 'redux';
import rootReducer from '../reducers/main';

export default createStore(
  rootReducer,
  {
    listing: {
      id: 0,
      maxGuests: 510,
      maxInfants: 3,
      chargePerNight: 150,
      cleaningFee: 10,
      serviceFee: 10,
      occupancyFee: 10,
      rating: 9,
      numberOfRatings: 300,
    },
    currentMonth: 7,
    currentYear: 2019,
    bookedDates: [],
    selectedStartDate: 0,
    selectedEndDate: 0,
    selectedAdults: 1,
  },
);
