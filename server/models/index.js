var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT messages.message FROM messages INNER JOIN username, rooms ON username.id = messages.usernameId AND rooms.roomname = messages.roomId', post, function(err, result) {
        if(err) {
          throw err;
        } else {
          console.log(result);
          callback(result);
        }
      });
      console.log(data);
    }, // a function which produces all the messages
    post: function (data) {
      var message = data;
      db.query('INSERT into messages ');
       
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


  
