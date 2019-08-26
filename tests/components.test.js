/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App';
import CalendarContainer from '../client/containers/CalendarContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  describe('App', () => {
    const setup = () => {
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
      };
      const enzymeWrapper = shallow(<App {...props} />);
      return {
        props,
        enzymeWrapper,
      };
    };

    it('should render self and store states', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.contains('$150')).toBe(true);
      expect(enzymeWrapper.contains('300')).toBe(true);
    });
  });

  describe('Calendar', () => {
    const currentDate = new Date();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const setup = () => {
      const props = {
        currentMonth: currentDate.getMonth(),
        currentYear: currentDate.getFullYear(),
        changeMonthHandler: jest.fn(),
      };
      const enzymeWrapper = shallow(<CalendarContainer {...props} />);
      return {
        props,
        enzymeWrapper,
      };
    };

    it('should render self with store states', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.contains(month[currentDate.getMonth()])).toBe(true);
      expect(enzymeWrapper.contains(currentDate.getFullYear())).toBe(true);
    });

    // it('should change month with button clicks', () => {

    // });
  });
});
