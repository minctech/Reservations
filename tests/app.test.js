/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';

describe('App', () => {
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
  it('displays static information of the listing', () => {
    const wrapper = shallow(<App listing={listing} />);

    expect(wrapper.contains(`$${listing.chargePerNight} per night`)).toBe(true);
    expect(wrapper.contains(`${listing.numberOfRatings}`)).toBe(true);
  });
});
