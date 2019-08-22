const flooredRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

const randomListingGenerator = () => {
  let cleaningFee = flooredRandomNumber(50);
  let serviceFee = flooredRandomNumber(25);
  let occupancyFee = flooredRandomNumber(20);

  return {
    maxGuests: flooredRandomNumber(10) + 1,
    maxInfants: flooredRandomNumber(5),
    chargePerNight: flooredRandomNumber(500) + 1,
    cleaningFee: cleaningFee ? cleaningFee : null,
    serviceFee: serviceFee ? serviceFee : null,
    occupancyFee: occupancyFee ? occupancyFee : null,
    rating: flooredRandomNumber(11),
    numberOfRatings: flooredRandomNumber(500) + 1,
  };
};

module.exports = {
  randomListingGenerator,
};