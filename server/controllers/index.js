// var models = require('../models');
// exports.headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };
// module.exports = {
//   messages: {
//     get: function (req, res) {
//       models.messages.get(function(data) {
//         console.log(data);

//         res.json(data);
//       });
//     },  
//    // a function which handles a get request for all messages
//     post: function (req, res) {
//       models.messages.post(req.body, function() {
//         res.send('success');
//       }); 
//     }, 
//   }

//   // users: {
//   //   // Ditto as above
//   //   get: function (req, res) {},
//   //   post: function (req, res) {}
//   // }
// };

var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { /* do something */console.log('error'); }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { console.log('error'); }
        res.sendStatus(201);
      });
    },
    options: function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }  
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    },
    options: function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }
  }
};

