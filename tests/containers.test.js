/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';
import AppContainer from '../client/containers/AppContainer';
import CalendarContainer from '../client/containers/CalendarContainer';
import CalendarDatesContainer from '../client/containers/CalendarDatesContainer';
import GuestsContainer from '../client/containers/GuestsContainer';
import TotalContainer from '../client/containers/TotalContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('containers', () => {
  describe('AppContainer', () => {
    const props = {
      listing: {
        maxGuests: 5,
        maxInfants: 3,
        chargePerNight: 150,
        cleaningFee: 10,
        serviceFee: 10,
        occupancyFee: 10,
        rating: 9,
        numberOfRatings: 300,
      },
      guestContainerView: false,
      viewCalendar: false,
      startDateView: false,
      selectedDates: [],
      selectedStartDate: null,
      selectedEndDate: null,
      selectedAdults: 1,
      selectedChildren: 0,
      selectedInfants: 0,
    };

    const store = createMockStore(props);
    const component = shallow(<AppContainer store={store} />);

    it('should render self, store states and map dispactch functions to props', () => {
      expect(component.find('App')).to.have.lengthOf(1);
      expect(component.dive().props()).to.include(store.getState());
      expect(component.dive().props().changeStartDateView).to.be.a('function');
      expect(component.dive().props().changeViewCalendar).to.be.a('function');
      expect(component.dive().props().changeGuestContainerView).to.be.a('function');
      expect(component.dive().props().changeSelectedDates).to.be.a('function');
    });
  });
});
