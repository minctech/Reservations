const Sequelize = require('sequelize');
const dummyData = require('./dummyData');

const sequelize = new Sequelize('reservations', 'root', '', { dialect: 'mysql' });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Listing = sequelize.define('listing', {
  maxGuests: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  maxInfants: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  chargePerNight: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cleaningFee: {
    type: Sequelize.INTEGER,
  },
  serviceFee: {
    type: Sequelize.INTEGER,
  },
  occupancyFee: {
    type: Sequelize.INTEGER,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numberOfRatings: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

const BookedDate = sequelize.define('bookeddate', {
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  month: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  listingId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Listing,
      key: 'id'
    }
  }
});

sequelize.drop()
  .then(() => {
    return sequelize.sync();
  })
  .then(() => {
    let listings = [];
    for (let i = 0; i < 100; i++) {
      listings.push(dummyData.randomListingGenerator());
    }
    return Listing.bulkCreate(listings);
  })
  .then(() => {
    let bookings = [];
    for (let i = 1; i <= 100; i++) {
      bookings = bookings.concat(dummyData.randomBookingGenerator(i));
    }
    return BookedDate.bulkCreate(bookings);
  })
  .then(() => {
    console.log('tables and seed data created');
    return;
  })
  .catch((error) => {
    console.log('Error creating tables', error);
    return;
  });
