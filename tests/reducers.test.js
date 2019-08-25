/* eslint-disable no-undef */
import appReducers from '../client/reducers/App';

describe('listing reducer', () => {
  it('should return the initial state', () => {
    expect(appReducers.listing(undefined, {})).toEqual(null);
  });

  const listing = {
    maxGuests: 2,
    maxInfants: 1,
    chargePerNight: 323,
    cleaningFee: 43,
    serviceFee: 23,
    occupancyFee: 10,
    rating: 7,
    numberOfRatings: 231,
  };

  it('should handle CHANGE_LISTING', () => {
    expect(appReducers.listing(undefined, {
      type: 'CHANGE_LISTING',
      listing,
    })).toEqual(listing);
  });
});
