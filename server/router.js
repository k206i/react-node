module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send([
      '111111',
      '22222222',
      '3333333'
    ])
  });
};
