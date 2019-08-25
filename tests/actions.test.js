/* eslint-disable no-undef */
import appActions from '../client/actions/App';

describe('actions', () => {
  it('should create an action to change listing', () => {
    const listing = {
      maxGuests: 5,
      maxInfants: 3,
      chargePerNight: 150,
      cleaningFee: 10,
      serviceFee: 10,
      occupancyFee: 10,
      rating: 9,
      numberOfRatings: 300,
    };
    const expectedAction = {
      type: 'CHANGE_LISTING',
      listing,
    };
    expect(appActions.changeListing(listing)).toEqual(expectedAction);
  });
});
