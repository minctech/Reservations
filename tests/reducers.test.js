/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai';
import appReducers from '../client/reducers/App';
import calendarReducers from '../client/reducers/Calendar';

describe('listing reducer', () => {
  it('should return the initial state', () => {
    expect(appReducers.listing(undefined, {})).to.be.null;
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
    })).to.equal(listing);
  });
});

describe('calendar reducers', () => {
  it('should return the initial state', () => {
    expect(calendarReducers.currentMonth(undefined, {})).to.be.null;
    expect(calendarReducers.currentYear(undefined, {})).to.be.null;
  });

  it('should handle CHANGE_CURRENT_MONTH', () => {
    expect(calendarReducers.currentMonth({ currentMonth: 0, currentYear: 2019 }, {
      type: 'CHANGE_CURRENT_MONTH',
      currentMonth: 1,
    })).to.equal(1);
  });

  it('should handle CHANGE_CURRENT_YEAR', () => {
    expect(calendarReducers.currentYear({ currentMonth: 0, currentYear: 2019 }, {
      type: 'CHANGE_CURRENT_YEAR',
      currentYear: 2020,
    })).to.equal(2020);
  });
});
