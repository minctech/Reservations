const Sequelize = require('sequelize');
const sequelize = new Sequelize('reservations', 'root', '', { dialect: 'mysql' });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Reservation = sequelize.define('reservation', {
  adults: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  children: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  infants: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  checkInDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  checkOutDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  }
});

const BookedDates = sequelize.define('bookedDate', {
  date: {
    primaryKey: true,
    type: Sequelize.DATEONLY
  },
  reservationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Reservation,
      key: 'id'
    }
  }
});


sequelize.drop()
  .then(() => {
    sequelize.sync({force: true});
  })
  .then(() => {
    console.log('Reservations and BookedDates tables created');
  })
  .catch((error) => {
    console.log('Error creating tables', error);
    return;
  });
