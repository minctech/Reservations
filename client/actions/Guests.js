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

export default { changeSelectedAdults, changeSelectedChildren, changeSelectedInfants };
