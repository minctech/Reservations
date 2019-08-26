const changeCurrentMonth = (currentMonth) => ({
  type: 'CHANGE_CURRENT_MONTH',
  currentMonth,
});

const changeCurrentYear = (currentYear) => ({
  type: 'CHANGE_CURRENT_YEAR',
  currentYear,
});

export default { changeCurrentMonth, changeCurrentYear };
