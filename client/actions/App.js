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

export default { changeListing, changeViewCalendar, changeStartDateView };
