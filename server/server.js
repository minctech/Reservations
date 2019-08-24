const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database-sequelize/index');

const port = 3000;

const app = express();

app.use(morgan('tiny'));
app.use('/api/listings/:listing', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

app.get('/api/dblistings', (req, res) => {
  db.Listing.findOne({
    where: {
      id: req.query.listing,
    },
  })
    .then((listing) => {
      res.send(listing);
    });
});
