/* eslint-disable no-undef */
import appActions from '../client/actions/App';
import calendarActions from '../client/actions/Calendar';

describe('appActions', () => {
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

describe('calendarActions', () => {
  it('should create an action to change month', () => {
    const expectedAction = {
      type: 'CHANGE_CURRENT_MONTH',
      currentMonth: 1,
    };
    expect(calendarActions.changeCurrentMonth(1)).toEqual(expectedAction);
  });

  it('should create an action to change year', () => {
    const expectedAction = {
      type: 'CHANGE_CURRENT_YEAR',
      currentYear: 2020,
    };
    expect(calendarActions.changeCurrentYear(2020)).toEqual(expectedAction);
  });
});
