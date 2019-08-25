const listing = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_LISTING':
      return action.listing || null;
    default:
      return state;
  }
};

export default { listing };
