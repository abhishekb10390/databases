// var mysql = require('mysql');

// module.exports.dbConnection = mysql.createConnection({
//   server: 'localhost',
//   user: 'root',
//   password: 'plantlife',
//   database: 'chat'
// });
  // db.connect(function(err) {
  //   if (err) { throw err; }
  //   console.log('You are now connected...');
  // });
  // return db;
 
// }; 
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var mysql = require('mysql');


var connection = mysql.createConnection({
  server: 'https://127.0.0.1:3000/classes/messages',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

connection.connect(function(err) {
  if(err) {
    throw err;
  }
  console.log('connection');
});

module.exports = connection;
