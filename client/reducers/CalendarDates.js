const selectedStartDate = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_START_DATE':
      return action.selectedStartDate || null;
    default:
      return state;
  }
};

const selectedEndDate = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_END_DATE':
      return action.selectedEndDate || null;
    default:
      return state;
  }
};

const selectedDates = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_DATES':
      return action.selectedDates || [];
    default:
      return state;
  }
};

const hoverHighlightedDates = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_HOVER_HIGHLIGHTED_DATES':
      return action.hoverHighlightedDates || [];
    default:
      return state;
  }
};

export default {
  selectedStartDate, selectedEndDate, selectedDates, hoverHighlightedDates,
};
