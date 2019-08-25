/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App';

Enzyme.configure({ adapter: new Adapter() });

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

describe('components', () => {
  describe('App', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.includes('$150')).toBe(true);
      expect(enzymeWrapper.includes('300')).toBe(true);
    });
  });
});
