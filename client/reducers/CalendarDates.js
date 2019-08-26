const selectedStartDate = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_START_DATE':
      return action.selectedStartDate || {};
    default:
      return state;
  }
};

const selectedEndDate = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_END_DATE':
      return action.selectedEndDate || {};
    default:
      return state;
  }
};

export default { selectedStartDate, selectedEndDate };
