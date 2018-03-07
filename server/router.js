const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {
  // не используем cookie
  session: false
});
const requireSignin = passport.authenticate('local', {
  session: false
});

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({
      message: 'SECRET 123'
    });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
