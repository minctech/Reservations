/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai';
import appReducers from '../client/reducers/App';
import calendarReducers from '../client/reducers/Calendar';
import calendarDateReducers from '../client/reducers/CalendarDates';
import guestsReducers from '../client/reducers/Guests';

describe('App Reducers', () => {
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

  const startDateView = true;
  const viewCalendar = true;
  const guestContainerView = true;

  it('should return the initial state', () => {
    expect(appReducers.listing(undefined, {})).to.be.null;
    expect(appReducers.startDateView(undefined, {})).to.be.false;
    expect(appReducers.viewCalendar(undefined, {})).to.be.false;
    expect(appReducers.guestContainerView(undefined, {})).to.be.false;
  });

  it('should handle CHANGE_LISTING', () => {
    expect(appReducers.listing(undefined, {
      type: 'CHANGE_LISTING',
      listing,
    })).to.equal(listing);
  });

  it('should handle CHANGE_START_DATE_VIEW', () => {
    expect(appReducers.startDateView(undefined, {
      type: 'CHANGE_START_DATE_VIEW',
      startDateView,
    })).to.equal(startDateView);
  });

  it('should handle CHANGE_VIEW_CALENDAR', () => {
    expect(appReducers.viewCalendar(undefined, {
      type: 'CHANGE_VIEW_CALENDAR',
      viewCalendar,
    })).to.equal(viewCalendar);
  });

  it('should handle CHANGE_GUEST_CONTAINER_VIEW', () => {
    expect(appReducers.guestContainerView(undefined, {
      type: 'CHANGE_GUEST_CONTAINER_VIEW',
      guestContainerView,
    })).to.equal(guestContainerView);
  });
});

describe('Calendar Reducers', () => {
  it('should return the initial state', () => {
    expect(calendarReducers.currentMonth(undefined, {})).to.be.null;
    expect(calendarReducers.currentYear(undefined, {})).to.be.null;
    expect(calendarReducers.bookedDates(undefined, {})).to.deep.equal([]);
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

  it('should handle CHANGE_BOOKED_DATES', () => {
    expect(calendarReducers.bookedDates({ bookedDates: [] }, {
      type: 'CHANGE_BOOKED_DATES',
      bookedDates: [{}, {}],
    })).to.deep.equal([{}, {}]);
  });
});

describe('CalendarDate Reducers', () => {
  it('should return the initial state', () => {
    expect(calendarDateReducers.selectedStartDate(undefined, {})).to.be.null;
    expect(calendarDateReducers.selectedEndDate(undefined, {})).to.be.null;
    expect(calendarDateReducers.selectedDates(undefined, {})).to.deep.equal([]);
  });

  it('should handle CHANGE_START_DATE', () => {
    expect(calendarDateReducers.selectedStartDate({}, {
      type: 'CHANGE_START_DATE',
      selectedStartDate: {
        year: 2019,
        month: 9,
        day: 10,
      },
    })).to.deep.equal({
      year: 2019,
      month: 9,
      day: 10,
    });
  });

  it('should handle CHANGE_END_DATE', () => {
    expect(calendarDateReducers.selectedEndDate({}, {
      type: 'CHANGE_END_DATE',
      selectedEndDate: {
        year: 2019,
        month: 9,
        day: 10,
      },
    })).to.deep.equal({
      year: 2019,
      month: 9,
      day: 10,
    });
  });

  it('should handle CHANGE_SELECTED_DATES', () => {
    expect(calendarDateReducers.selectedDates({ selectedDates: [] }, {
      type: 'CHANGE_SELECTED_DATES',
      selectedDates: [{}, {}],
    })).to.deep.equal([{}, {}]);
  });
});

describe('Calendar Reducers', () => {
  it('should return the initial state', () => {
    expect(calendarReducers.currentMonth(undefined, {})).to.be.null;
    expect(calendarReducers.currentYear(undefined, {})).to.be.null;
    expect(calendarReducers.bookedDates(undefined, {})).to.deep.equal([]);
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

  it('should handle CHANGE_BOOKED_DATES', () => {
    expect(calendarReducers.bookedDates({ bookedDates: [] }, {
      type: 'CHANGE_BOOKED_DATES',
      bookedDates: [{}, {}],
    })).to.deep.equal([{}, {}]);
  });
});

describe('Guests Reducers', () => {
  it('should return the initial state', () => {
    expect(guestsReducers.selectedAdults(undefined, {})).to.equal(1);
    expect(guestsReducers.selectedChildren(undefined, {})).to.equal(0);
    expect(guestsReducers.selectedInfants(undefined, {})).to.equal(0);
    expect(guestsReducers.maxGuestsReached(undefined, {})).to.be.false;
  });

  it('should handle CHANGE_SELECTED_ADULTS', () => {
    expect(guestsReducers.selectedAdults({}, {
      type: 'CHANGE_SELECTED_ADULTS',
      selectedAdults: 3,
    })).to.equal(3);
  });

  it('should handle CHANGE_SELECTED_CHILDREN', () => {
    expect(guestsReducers.selectedChildren({}, {
      type: 'CHANGE_SELECTED_CHILDREN',
      selectedChildren: 3,
    })).to.equal(3);
  });

  it('should handle CHANGE_SELECTED_INFANTS', () => {
    expect(guestsReducers.selectedInfants({}, {
      type: 'CHANGE_SELECTED_INFANTS',
      selectedInfants: 3,
    })).to.equal(3);
  });

  it('should handle CHANGE_MAX_GUESTS_REACHED', () => {
    expect(guestsReducers.maxGuestsReached({}, {
      type: 'CHANGE_MAX_GUESTS_REACHED',
      maxGuestsReached: true,
    })).to.be.true;
  });
});
