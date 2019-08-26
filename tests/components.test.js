/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import App from '../client/components/App';
import Calendar from '../client/components/Calendar';

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

      expect(enzymeWrapper.contains('$150')).to.be.true;
      expect(enzymeWrapper.contains('300')).to.be.true;
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
      const enzymeWrapper = shallow(<Calendar {...props} />);
      return {
        props,
        enzymeWrapper,
      };
    };

    it('should render self with store states', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.contains(month[currentDate.getMonth()])).to.be.true;
      expect(enzymeWrapper.contains(currentDate.getFullYear())).to.be.true;
    });

    it('should change month and year when button is clicked', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('button')).to.have.lengthOf(2);
    });
  });
});
