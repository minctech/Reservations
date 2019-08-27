const changeSelectedAdults = (selectedAdults) => ({
  type: 'CHANGE_SELECTED_ADULTS',
  selectedAdults,
});

const changeSelectedChildren = (selectedChildren) => ({
  type: 'CHANGE_SELECTED_CHILDREN',
  selectedChildren,
});

const changeSelectedInfants = (selectedInfants) => ({
  type: 'CHANGE_SELECTED_INFANTS',
  selectedInfants,
});

const changeMaxGuestsReached = (maxGuestsReached) => ({
  type: 'CHANGE_MAX_GUESTS_REACHED',
  maxGuestsReached,
});

export default {
  changeSelectedAdults, changeSelectedChildren, changeSelectedInfants, changeMaxGuestsReached,
};
