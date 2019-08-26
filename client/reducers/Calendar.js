const currentMonth = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_MONTH':
      return action.currentMonth || null;
    default:
      return state;
  }
};

export default { currentMonth };
