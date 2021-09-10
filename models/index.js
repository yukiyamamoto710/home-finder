const db = require('../db');

const getMatchingAddress = (data, cb) => {

  const queryAddress =
    `SELECT * from addresses
     INNER JOIN homes
     ON addresses.id = homes.id
     WHERE address LIKE "${data}%"`;

  db.query(queryAddress, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  })
};

const getMatchingStreet = (data, cb) => {

  // get a street name - the received data may include a street number or just a street name
  const streetName = Number(data[0]) === 'number'
  ? data.split(' ')[1]
  : data.split(' ')[0] === undefined
  ? data
  : data.split(' ')[0];

  const queryStreetName =
    `SELECT * from addresses
     INNER JOIN homes
     ON addresses.id = homes.id
     WHERE address LIKE "%${streetName}%"`;

  db.query(queryStreetName, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res)
    }
  })
};

const getMatchingZipcode = (data, cb) => {

  const zipcodeStartingIndex = data.search(/\d{5}/);
  const zip = data.substring(zipcodeStartingIndex, zipcodeStartingIndex+5);

  const queryZipcode =
    `SELECT * from addresses
     INNER JOIN homes
     ON addresses.id = homes.id
     WHERE zip=${zip};`;

  db.query(queryZipcode, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  })
};

module.exports = {
  getMatchingAddress: getMatchingAddress,
  getMatchingStreet: getMatchingStreet,
  getMatchingZipcode: getMatchingZipcode
}