/**
 * If the user just types zipcode, it will search by zip code and get nearby results.
 * If the user types an address, it will first search to see if there's an exact match,
 * and if not, it will search by the street name and get nearby results.
*/

const express = require('express');

const app = express();
const PORT = 3001;

const models = require('../models/index.js');

app.use(express.static('client/dist'));

app.get('/homes', (req, res) => {

  const response = {exact: [], nearby: []};
  const searchedByZipcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(req.query.address);

  if (searchedByZipcode) {
    models.getMatchingZipcode(req.query.address, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        response.nearby = data;
        res.status(200).send(response);
      }
    })

  } else {
    models.getMatchingAddress(req.query.address, (err, addressData) => {
      if (err) {
        res.status(404).send(err);

      } else if (Object.keys(addressData).length) {
        response.exact = addressData;
        res.status(200).send(response);

      } else {
        models.getMatchingStreet(req.query.address, (err, streetData) => {
          if (err) {
            res.status(404).send(err);
          } else {
            response.nearby = streetData;
            res.status(200).send(response);
          }
        })
      }
    })
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})