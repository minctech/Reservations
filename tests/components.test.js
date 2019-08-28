/* eslint-disable no-plusplus */
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
import CalendarDates from '../client/components/CalendarDates';
import Guests from '../client/components/Guests';


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
        changeStartDateView: jest.fn(),
        changeViewCalendar: jest.fn(),
        changeGuestContainerView: jest.fn(),
        changeSelectedDates: jest.fn(),
        guestContainerView: false,
        viewCalendar: false,
        startDateView: false,
        selectedDates: [],
        selectedStartDate: null,
      };
      const enzymeWrapper = shallow(<App {...props} />);
      return {
        props,
        enzymeWrapper,
      };
    };

    const { enzymeWrapper, props } = setup();

    it('should render self and store states', () => {
      expect(enzymeWrapper.contains('$150')).to.be.true;
      expect(enzymeWrapper.contains('300')).to.be.true;
    });

    it('should toggle render Guests according to guestContainerView', () => {
      expect(enzymeWrapper.find('Connect(Guests)')).to.have.lengthOf(0);
      enzymeWrapper.setProps({ guestContainerView: true });
      expect(enzymeWrapper.find('Connect(Guests)')).to.have.lengthOf(1);
      enzymeWrapper.setProps({ guestContainerView: false });
      expect(enzymeWrapper.find('Connect(Guests)')).to.have.lengthOf(0);
    });

    it('should toggle render Calendar according to calendarview and startdateview', () => {
      expect(enzymeWrapper.find('Connect(Calendar)')).to.have.lengthOf(0);
      enzymeWrapper.setProps({
        viewCalendar: true,
        startDateView: true,
      });
      expect(enzymeWrapper.find('Connect(Calendar)')).to.have.lengthOf(1);
      enzymeWrapper.setProps({
        viewCalendar: true,
        startDateView: false,
      });
      expect(enzymeWrapper.find('Connect(Calendar)')).to.have.lengthOf(1);
      enzymeWrapper.setProps({
        viewCalendar: false,
        startDateView: false,
      });
      expect(enzymeWrapper.find('Connect(Calendar)')).to.have.lengthOf(0);
    });

    it('should call changeStartDateView and changeViewCalendar when checkin or checkout is clicked', () => {
      enzymeWrapper.find('#checkin').simulate('click');
      expect(props.changeStartDateView.mock.calls.length).to.equal(1);
      expect(props.changeViewCalendar.mock.calls.length).to.equal(1);

      enzymeWrapper.find('#checkout').simulate('click');
      expect(props.changeStartDateView.mock.calls.length).to.equal(2);
      expect(props.changeViewCalendar.mock.calls.length).to.equal(2);
    });

    it('should call changeGuestContainerView when GuestsBox is clicked', () => {
      expect(props.changeGuestContainerView.mock.calls.length).to.equal(0);
      enzymeWrapper.find('GuestsBox').simulate('click');
      expect(props.changeGuestContainerView.mock.calls.length).to.equal(1);
    });

    it('should toggle render Total Container if there are selectedDates', () => {
      expect(enzymeWrapper.find('Connect(Total)')).to.have.lengthOf(0);
      enzymeWrapper.setProps({ selectedDates: [{}, {}] });
      expect(enzymeWrapper.find('Connect(Total)')).to.have.lengthOf(1);
      enzymeWrapper.setProps({ selectedDates: [] });
      expect(enzymeWrapper.find('Connect(Total)')).to.have.lengthOf(0);
    });

    it('should change checkInDate display according to selectedStartDate', () => {
      expect(enzymeWrapper.contains('Check-in')).to.be.true;
      enzymeWrapper.setProps({
        selectedStartDate: {
          year: 2019,
          month: 8,
          day: 10,
        },
      });
      expect(enzymeWrapper.contains('9/10/2019')).to.be.true;
      enzymeWrapper.setProps({ selectedStartDate: null });
      expect(enzymeWrapper.contains('Check-in')).to.be.true;
    });

    it('should change checkOutDate display according to selectedEndDate', () => {
      expect(enzymeWrapper.contains('Checkout')).to.be.true;
      enzymeWrapper.setProps({
        selectedEndDate: {
          year: 2019,
          month: 8,
          day: 10,
        },
      });
      expect(enzymeWrapper.contains('9/10/2019')).to.be.true;
      enzymeWrapper.setProps({ selectedEndDate: null });
      expect(enzymeWrapper.contains('Checkout')).to.be.true;
    });

    it('should call changeSelectedDates when there is a selectedStartDate and selectedEndDate', () => {
      expect(props.changeSelectedDates.mock.calls.length).to.equal(0);
      enzymeWrapper.setProps({
        selectedStartDate: {
          year: 2019,
          month: 8,
          day: 2,
        },
        selectedEndDate: {
          year: 2019,
          month: 8,
          day: 10,
        },
      });
      expect(props.changeSelectedDates.mock.calls.length).to.equal(1);
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
        changeSelectedEndDate: jest.fn(),
        changeSelectedStartDate: jest.fn(),
        changeSelectedDates: jest.fn(),
      };
      const enzymeWrapper = shallow(<Calendar {...props} />);
      return {
        props,
        enzymeWrapper,
      };
    };

    const { enzymeWrapper, props } = setup();

    it('should render self with store states', () => {
      expect(enzymeWrapper.contains(month[currentDate.getMonth()])).to.be.true;
      expect(enzymeWrapper.contains(currentDate.getFullYear())).to.be.true;
      expect(enzymeWrapper.contains('Su')).to.be.true;
      expect(enzymeWrapper.contains('Mo')).to.be.true;
      expect(enzymeWrapper.contains('Tu')).to.be.true;
      expect(enzymeWrapper.contains('We')).to.be.true;
      expect(enzymeWrapper.contains('Th')).to.be.true;
      expect(enzymeWrapper.contains('Fr')).to.be.true;
      expect(enzymeWrapper.contains('Sa')).to.be.true;
    });

    it('should call changeMonthHandler when button is clicked', () => {
      expect(enzymeWrapper.find('Button')).to.have.lengthOf(2);
      enzymeWrapper.find('Button').at(0).simulate('click');
      expect(props.changeMonthHandler.mock.calls.length).to.equal(1);
      enzymeWrapper.find('Button').at(1).simulate('click');
      expect(props.changeMonthHandler.mock.calls.length).to.equal(2);
    });

    it('should call changeSelectedStartDate, changeSelectedEndDate and changeSelectedDates when clear button is clicked', () => {
      expect(props.changeSelectedEndDate.mock.calls.length).to.equal(0);
      expect(props.changeSelectedStartDate.mock.calls.length).to.equal(0);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(0);
      enzymeWrapper.find('ClearDatesButton').simulate('click');
      expect(props.changeSelectedEndDate.mock.calls.length).to.equal(1);
      expect(props.changeSelectedStartDate.mock.calls.length).to.equal(1);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(1);
    });
  });

  describe('CalendarDates', () => {
    const currentDate = new Date();
    const setup = () => {
      const props = {
        currentMonth: currentDate.getMonth(),
        currentYear: currentDate.getFullYear(),
        changeMonthHandler: jest.fn(),
        changeSelectedEndDate: jest.fn(),
        changeSelectedStartDate: jest.fn(),
        changeSelectedDates: jest.fn(),
        changeStartDateView: jest.fn(),
        changeViewCalendar: jest.fn(),
        bookedDates: [],
        startDateView: false,
        selectedDates: [],
        selectedStartDate: null,
      };
      const enzymeWrapper = shallow(<CalendarDates {...props} />);
      return {
        props,
        enzymeWrapper,
      };
    };

    const { enzymeWrapper, props } = setup();

    it('should render self with store states', () => {
      const lastDate = new Date(props.currentYear, props.currentMonth + 1, 0);
      expect(enzymeWrapper.find('Day')).to.have.lengthOf(lastDate.getDate());
    });

    it('should call changeStartDateView, changeSelectedStartedDate and changeSelectedDates when a day is clicked on startView', () => {
      expect(props.changeStartDateView.mock.calls.length).to.equal(0);
      expect(props.changeSelectedStartDate.mock.calls.length).to.equal(0);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(0);
      enzymeWrapper.setProps({ startDateView: true });
      enzymeWrapper.find('Day').at(0).simulate('click');
      expect(props.changeStartDateView.mock.calls.length).to.equal(1);
      expect(props.changeSelectedStartDate.mock.calls.length).to.equal(1);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(1);
    });

    it('should call changeSelectedEndDate, changeViewCalendar and changeSelectedDates when a day is clicked off of startView', () => {
      expect(props.changeSelectedEndDate.mock.calls.length).to.equal(0);
      expect(props.changeViewCalendar.mock.calls.length).to.equal(0);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(0);
      enzymeWrapper.setProps({ startDateView: false });
      enzymeWrapper.find('Day').at(0).simulate('click');
      expect(props.changeSelectedEndDate.mock.calls.length).to.equal(1);
      expect(props.changeViewCalendar.mock.calls.length).to.equal(1);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(1);
    });

    it('should call changeStartDateView, changeSelectedStartedDate and changeSelectedDates when a SelectedDay is clicked on startView', () => {
      expect(props.changeSelectedStartDate.mock.calls.length).to.equal(0);
      expect(props.changeStartDateView.mock.calls.length).to.equal(0);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(0);

      const selectedDates = [];
      for (let i = 0; i < 2; i++) {
        selectedDates.push({
          year: currentDate.getFullYear(),
          month: currentDate.getMonth(),
          day: currentDate.getDate() + i,
        });
      }

      enzymeWrapper.setProps({
        startDateView: true,
        selectedDates,
      });
      enzymeWrapper.find('SelectedDay').at(0).simulate('click');
      expect(props.changeSelectedStartDate.mock.calls.length).to.equal(1);
      expect(props.changeStartDateView.mock.calls.length).to.equal(1);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(1);
    });

    it('should call changeSelectedEndDate, changeViewCalendar and changeSelectedDates when a SelectedDay is clicked off of startView', () => {
      expect(props.changeSelectedEndDate.mock.calls.length).to.equal(0);
      expect(props.changeViewCalendar.mock.calls.length).to.equal(0);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(0);

      const selectedDates = [];
      for (let i = 0; i < 2; i++) {
        selectedDates.push({
          year: currentDate.getFullYear(),
          month: currentDate.getMonth(),
          day: currentDate.getDate() + i,
        });
      }

      enzymeWrapper.setProps({
        startDateView: false,
        selectedDates,
      });
      enzymeWrapper.find('SelectedDay').at(0).simulate('click');
      expect(props.changeSelectedEndDate.mock.calls.length).to.equal(1);
      expect(props.changeViewCalendar.mock.calls.length).to.equal(1);
      expect(props.changeSelectedDates.mock.calls.length).to.equal(1);
    });
  });

  describe('Guests', () => {
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
        selectedAdults: 1,
        selectedChildren: 0,
        selectedInfants: 0,
        changeSelectedAdults: jest.fn(),
        changeSelectedChildren: jest.fn(),
        changeSelectedInfants: jest.fn(),
        maxGuestsReached: false,
        changeMaxGuestsReached: jest.fn(),
      };
      const enzymeWrapper = shallow(<Guests {...props} />);
      return {
        props,
        enzymeWrapper,
      };
    };

    const { enzymeWrapper, props } = setup();

    it('should render self with store states', () => {
      expect(enzymeWrapper.contains('Adults')).to.be.true;
      expect(enzymeWrapper.find('BigNumbers').at(0).text()).to.equal(props.selectedAdults.toString());
      expect(enzymeWrapper.contains('Children')).to.be.true;
      expect(enzymeWrapper.find('BigNumbers').at(1).text()).to.equal(props.selectedChildren.toString());
      expect(enzymeWrapper.contains('Infants')).to.be.true;
      expect(enzymeWrapper.find('BigNumbers').at(2).text()).to.equal(props.selectedInfants.toString());
      expect(enzymeWrapper.find('SmallLetters').at(2).text()).to.include(props.listing.maxGuests.toString());
    });

    it('should call changeSelectedAdults when AdultsMinusButton is clicked and adults is more than 1', () => {
      expect(props.changeSelectedAdults.mock.calls.length).to.equal(0);
      enzymeWrapper.find('AdultsMinusButton').simulate('click');
      expect(props.changeSelectedAdults.mock.calls.length).to.equal(0);
      enzymeWrapper.setProps({ selectedAdults: 2 });
      enzymeWrapper.find('AdultsMinusButton').simulate('click');
      expect(props.changeSelectedAdults.mock.calls.length).to.equal(1);
    });

    it('should call changeSelectedAdults when PlusButton is clicked and adults + children is less than maxGuests', () => {
      expect(props.changeSelectedAdults.mock.calls.length).to.equal(0);
      enzymeWrapper.find('PlusButton').at(0).simulate('click');
      expect(props.changeSelectedAdults.mock.calls.length).to.equal(1);
      enzymeWrapper.setProps({ maxGuestsReached: true });
      enzymeWrapper.find('PlusButton').at(0).simulate('click');
      expect(props.changeSelectedAdults.mock.calls.length).to.equal(1);
    });

    it('should call changeSelectedChildren when ChildrenMinusButton is clicked and children is more than 0', () => {
      expect(props.changeSelectedChildren.mock.calls.length).to.equal(0);
      enzymeWrapper.find('ChildrenMinusButton').simulate('click');
      expect(props.changeSelectedChildren.mock.calls.length).to.equal(0);
      enzymeWrapper.setProps({ selectedChildren: 1 });
      enzymeWrapper.find('ChildrenMinusButton').simulate('click');
      expect(props.changeSelectedChildren.mock.calls.length).to.equal(1);
    });

    it('should call changeSelectedChildren when 2nd PlusButton is clicked and maxGuests is not true', () => {
      enzymeWrapper.setProps({ maxGuestsReached: false });
      expect(props.changeSelectedChildren.mock.calls.length).to.equal(0);
      enzymeWrapper.find('PlusButton').at(1).simulate('click');
      expect(props.changeSelectedChildren.mock.calls.length).to.equal(1);
      enzymeWrapper.setProps({ maxGuestsReached: true });
      enzymeWrapper.find('PlusButton').at(1).simulate('click');
      expect(props.changeSelectedChildren.mock.calls.length).to.equal(1);
    });

    it('should call changeSelectedInfants when InfantsMinusButton is clicked and selectedInfants is more than 0', () => {
      enzymeWrapper.setProps({ selectedInfants: 0 });
      expect(props.changeSelectedInfants.mock.calls.length).to.equal(0);
      enzymeWrapper.find('InfantsMinusButton').simulate('click');
      expect(props.changeSelectedInfants.mock.calls.length).to.equal(0);
      enzymeWrapper.setProps({ selectedInfants: 1 });
      enzymeWrapper.find('InfantsMinusButton').simulate('click');
      expect(props.changeSelectedInfants.mock.calls.length).to.equal(1);
    });

    it('should call changeSelectedInfants when InfantsPlusButton is clicked and selectedInfants less than maxInfants', () => {
      enzymeWrapper.setProps({ selectedInfants: 0 });
      expect(props.changeSelectedInfants.mock.calls.length).to.equal(0);
      enzymeWrapper.find('InfantsPlusButton').simulate('click');
      expect(props.changeSelectedInfants.mock.calls.length).to.equal(1);
      enzymeWrapper.setProps({ selectedInfants: props.listing.maxInfants });
      enzymeWrapper.find('InfantsPlusButton').simulate('click');
      expect(props.changeSelectedInfants.mock.calls.length).to.equal(1);
    });
  });
});
