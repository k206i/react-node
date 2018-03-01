const User = require('../models/user');

exports.singup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // If exist
  User.findOne({
    email: email,
  }, function(err, existingUser) {

  });
};