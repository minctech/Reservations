const flooredRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

const randomReservationGenerator = () => {
  let randomDate = Math.floor(Math.random() * 31);
  let randomMonth = Math.floor(Math.random() * 11);

  return {
    adults: flooredRandomNumber(5),
    children: flooredRandomNumber(5),
    infants: flooredRandomNumber(5),
    checkInDate: new Date(2019, randomMonth, randomDate),
    checkOutDate: new Date(2019, randomMonth, randomDate + Math.floor(Math.random() * 4) + 1),
  };
};

module.exports = {
  randomReservationGenerator,
};