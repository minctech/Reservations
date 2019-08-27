const listing = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_LISTING':
      return action.listing || null;
    default:
      return state;
  }
};

const startDateView = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_START_DATE_VIEW':
      return action.startDateView || false;
    default:
      return state;
  }
};

const viewCalendar = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW_CALENDAR':
      return action.viewCalendar || false;
    default:
      return state;
  }
};

export default { listing, viewCalendar, startDateView };
