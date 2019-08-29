const listing = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_LISTING':
      return action.listing || null;
    default:
      return state;
  }
};

const startDateView = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_START_DATE_VIEW':
      return action.startDateView || false;
    default:
      return state;
  }
};

const viewCalendar = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW_CALENDAR':
      return action.viewCalendar || false;
    default:
      return state;
  }
};

const guestContainerView = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_GUEST_CONTAINER_VIEW':
      return action.guestContainerView || false;
    default:
      return state;
  }
};

export default {
  listing, viewCalendar, startDateView, guestContainerView,
};
