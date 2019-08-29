/* eslint-disable no-undef */
import appActions from '../client/actions/App';
import calendarActions from '../client/actions/Calendar';
import calendarDateActions from '../client/actions/CalendarDates';
import guestActions from '../client/actions/Guests';

describe('App Actions', () => {
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

  it('should create an action to change viewCalendar', () => {
    const viewCalendar = true;
    const expectedAction = {
      type: 'CHANGE_VIEW_CALENDAR',
      viewCalendar,
    };
    expect(appActions.changeViewCalendar(viewCalendar)).toEqual(expectedAction);
  });

  it('should create an action to change startDateView', () => {
    const startDateView = true;
    const expectedAction = {
      type: 'CHANGE_START_DATE_VIEW',
      startDateView,
    };
    expect(appActions.changeStartDateView(startDateView)).toEqual(expectedAction);
  });

  it('should create an action to change guestContainerView', () => {
    const guestContainerView = true;
    const expectedAction = {
      type: 'CHANGE_GUEST_CONTAINER_VIEW',
      guestContainerView,
    };
    expect(appActions.changeGuestContainerView(guestContainerView)).toEqual(expectedAction);
  });
});

describe('Calendar Actions', () => {
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

describe('CalendarDates Actions', () => {
  it('should create an action to change selectedStartDate', () => {
    const selectedStartDate = {
      year: 2019,
      month: 8,
      day: 10,
    };
    const expectedAction = {
      type: 'CHANGE_START_DATE',
      selectedStartDate,
    };
    expect(calendarDateActions.changeSelectedStartDate(selectedStartDate)).toEqual(expectedAction);
  });

  it('should create an action to change selectedEndDate', () => {
    const selectedEndDate = {
      year: 2019,
      month: 8,
      day: 10,
    };
    const expectedAction = {
      type: 'CHANGE_END_DATE',
      selectedEndDate,
    };
    expect(calendarDateActions.changeSelectedEndDate(selectedEndDate))
      .toEqual(expectedAction);
  });

  it('should create an action to change selectedDates', () => {
    const selectedDates = [{}, {}];
    const expectedAction = {
      type: 'CHANGE_SELECTED_DATES',
      selectedDates,
    };
    expect(calendarDateActions.changeSelectedDates(selectedDates))
      .toEqual(expectedAction);
  });
});

describe('Guests Actions', () => {
  it('should create an action to change selectedAdults', () => {
    const selectedAdults = 3;
    const expectedAction = {
      type: 'CHANGE_SELECTED_ADULTS',
      selectedAdults,
    };
    expect(guestActions.changeSelectedAdults(selectedAdults)).toEqual(expectedAction);
  });

  it('should create an action to change selectedChildren', () => {
    const selectedChildren = 3;
    const expectedAction = {
      type: 'CHANGE_SELECTED_CHILDREN',
      selectedChildren,
    };
    expect(guestActions.changeSelectedChildren(selectedChildren)).toEqual(expectedAction);
  });

  it('should create an action to change selectedInfants', () => {
    const selectedInfants = 3;
    const expectedAction = {
      type: 'CHANGE_SELECTED_INFANTS',
      selectedInfants,
    };
    expect(guestActions.changeSelectedInfants(selectedInfants)).toEqual(expectedAction);
  });

  it('should create an action to change maxGuestsReached', () => {
    const maxGuestsReached = true;
    const expectedAction = {
      type: 'CHANGE_MAX_GUESTS_REACHED',
      maxGuestsReached,
    };
    expect(guestActions.changeMaxGuestsReached(maxGuestsReached)).toEqual(expectedAction);
  });
});
