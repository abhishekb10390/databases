var mysql = require('mysql');

module.exports = function() {
  var db = mysql.createConnection({
    host: localhost,
    user: 'root',
    password: 'plantlife',
    database: 'chat'
  });
  db.connect(function(err) {
    if (err) { throw err; }
    console.log('You are now connected...');
  });
  return db;
 
}; 
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


