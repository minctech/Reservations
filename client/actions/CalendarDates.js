const changeSelectedStartDate = (selectedStartDate) => ({
  type: 'CHANGE_START_DATE',
  selectedStartDate,
});

const changeSelectedEndDate = (selectedEndDate) => ({
  type: 'CHANGE_END_DATE',
  selectedEndDate,
});

const changeSelectedDates = (selectedDates) => ({
  type: 'CHANGE_SELECTED_DATES',
  selectedDates,
});

export default { changeSelectedEndDate, changeSelectedStartDate, changeSelectedDates };
