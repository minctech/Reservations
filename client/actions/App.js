const changeListing = (listing) => ({
  type: 'CHANGE_LISTING',
  listing,
});

const changeViewCalendar = (viewCalendar) => ({
  type: 'CHANGE_VIEW_CALENDAR',
  viewCalendar,
});

const changeStartDateView = (startDateView) => ({
  type: 'CHANGE_START_DATE_VIEW',
  startDateView,
});

const changeGuestContainerView = (guestContainerView) => ({
  type: 'CHANGE_GUEST_CONTAINER_VIEW',
  guestContainerView,
});

export default {
  changeListing, changeViewCalendar, changeStartDateView, changeGuestContainerView,
};
