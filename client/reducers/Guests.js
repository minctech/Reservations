const selectedAdults = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_ADULTS':
      return action.selectedAdults || 1;
    default:
      return state;
  }
};

const selectedChildren = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_CHILDREN':
      return action.selectedChildren || 0;
    default:
      return state;
  }
};

const selectedInfants = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_INFANTS':
      return action.selectedInfants || 0;
    default:
      return state;
  }
};

export default { selectedAdults, selectedChildren, selectedInfants };
