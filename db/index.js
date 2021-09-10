var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'homes',
  multipleStatements: true
});

connection.connect((err)=> {
  if (err) {
    console.error(err)
  } else {
    console.log('connected to Mysql')
  }
});

// connection.end();
module.exports = connection;