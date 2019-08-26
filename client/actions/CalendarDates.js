const changeSelectedStartDate = (selectedStartDate) => ({
  type: 'CHANGE_START_DATE',
  selectedStartDate,
});

const changeSelectedEndDate = (selectedEndDate) => ({
  type: 'CHANGE_END_DATE',
  selectedEndDate,
});

export default { changeSelectedEndDate, changeSelectedStartDate };
