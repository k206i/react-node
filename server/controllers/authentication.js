const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = Date.now();
  return jwt.encode({
    sub: user.id,
    iat: timestamp,
  }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has auth'd email and password
  res.send({
    token: tokenForUser(req.user)
  });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({
      error: 'Enter pass & email',
    });
  }

  User.findOne({
    email: email,
  }, function(err, existingUser) {

    if (err) {
      return next(err);
    }

    // If exist
    if (existingUser) {
      return res.status(422).send({
        error: 'Email is in use'
      });
    }

    // If not exist
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      res.json({
        token: tokenForUser(user),
      });
    });

  });

  //
};