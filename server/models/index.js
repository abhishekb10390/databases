// var db = require('../db/index.js').dbConnection;


// module.exports = {
//   messages: {
//     get: function (cb) {
//       var query = 'SELECT messages.id, messages.messages, rooms.roomname, users.name FROM messages, users, rooms ORDER BY messages.id desc';
//       db.query(query, function(err, results) {
//         if (err) {
//           console.log('error');
//           throw err;
//         } else {
//           console.log(rows, 'rows');
//           cb(results);
//         }
//       });
// // 'SELECT messages.messages FROM messages INNER JOIN users, rooms ON users.id = messages.userId AND rooms.id = messages.roomId;'
//       // console.log(data);
//     }, // a function which produces all the messages
// //     post: function (data, cb) {
    
// // //       console.log(data);
// // //       db.query(`SELECT name FROM users WHERE users.name = ${data.username} AND users.id = messages.userID`, function(err, results){
// // //         db.query(`INSERT INTO messages (userId, message, roomId) value (${data.messages})  `, function(err, result){  
// // //       });
// // //       db.query(`INSERT INTO messages (userId, message, roomId) value (${data.messages})  `, function(err, result){
// // //         cb();
// // // });
// // //       db.query("UPDATE messages.userId ")
// // //    }    
// //     } // a function which can be used to insert a message into the database
//   }

//   // users: {
//   //   // Ditto as above.
//   //   get: function () {},
//   //   post: function () {}
//   // }
// };

var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 'SELECT messages.id, messages.message, messages.roomname, users.username \
                      FROM messages LEFT OUTER JOIN users ON (messages.id = users.id) \
                      ORDER BY messages.id desc';
      db.query(queryStr, function(err, results) {
        if(err) {
          console.log('messages.get')
        }
        console.log(results);
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(message, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

  
