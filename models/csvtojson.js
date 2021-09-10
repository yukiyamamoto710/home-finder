const fileName = "redfin_2021-09-03-21-08-00.csv";
const csvtojson = require('csvtojson');

const connection = require('../db');

csvtojson().fromFile(fileName).then(source => {
  var count = 0;
  for (var i = 0; i < source.length; i++) {
      SALE_TYPE = source[i]["SALE TYPE"] || null;
      SOLD_DATE = source[i]["SOLD DATE"] || null;
      PROPERTY_TYPE = source[i]["PROPERTY TYPE"] || null;
      ADDRESS = source[i]["ADDRESS"] || null;
      CITY = source[i]["CITY"] || null;
      STATE = source[i]["STATE OR PROVINCE"] || null;
      ZIP = source[i]["ZIP OR POSTAL CODE"] || null;
      PRICE = source[i]["PRICE"] || null;
      BEDS = source[i]["BEDS"] || null;
      BATHS = source[i]["BATHS"] || null;
      LOCATION = source[i]["LOCATION"] || null;
      SQUARE_FEET = source[i]["SQUARE FEET"] || null;
      LOT_SIZE = source[i]["LOT SIZE"] || null;
      YEAR_BUILT = source[i]["YEAR BUILT"] || null;
      DAYS_MARKET = source[i]["DAYS ON MARKET"] || null;
      SF = source[i]["$/SQUARE FEET"] || null;
      HOA = source[i]["HOA/MONTH"] || null;
      STATUS = source[i]["STATUS"] || null;
      OH_START = source[i]["NEXT OPEN HOUSE START TIME"] || null;
      OH_END = source[i]["NEXT OPEN HOUSE END TIME"] || null;
      LINK = source[i]["URL"] || null;
      SOURCE = source[i]["SOURCE"] || null;
      MLS = source[i]["MLS#"] || null;
      FAV = source[i]["FAVORITE"] || null;
      INTERESTED = source[i]["INTERESTED"] || null;
      LATITUDE = source[i]["LATITUDE"] || null;
      LONGITUDE = source[i]["LONGITUDE"] || null;

      var queryString =
            `START TRANSACTION;
            INSERT INTO homes
            VALUES (null, "${LINK}", ${PRICE}, ${BEDS}, ${BATHS}, ${SQUARE_FEET}, ${LOT_SIZE}, ${YEAR_BUILT}, ${SF}, ${HOA}, "${SALE_TYPE}", "${SOLD_DATE}", ${DAYS_MARKET}, "${STATUS}", "${OH_START}", "${OH_END}", "${SOURCE}", "${MLS}", "${FAV}", "${INTERESTED}", "${PROPERTY_TYPE}");
            INSERT INTO addresses
            VALUES (null,"${ADDRESS}", "${CITY}", "${STATE}", ${ZIP}, "${LOCATION}", "${LATITUDE}", "${LONGITUDE}");
            INSERT INTO addresses_homes
            VALUES (null, LAST_INSERT_ID(), LAST_INSERT_ID());
            COMMIT;`

      connection.query(queryString, (err, res) => {
          if (err) {
              console.log(err);
          }
      })
  }
  console.log("All items stored into database successfully")
})
