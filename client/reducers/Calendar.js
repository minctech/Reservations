const currentMonth = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_MONTH':
      return action.currentMonth;
    default:
      return state;
  }
};

const currentYear = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_YEAR':
      return action.currentYear;
    default:
      return state;
  }
};

const bookedDates = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_BOOKED_DATES':
      return action.bookedDates || [];
    default:
      return state;
  }
};

export default { currentMonth, currentYear, bookedDates };
