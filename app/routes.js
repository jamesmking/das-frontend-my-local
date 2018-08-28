module.exports = {
  bind: function (app) {
    app.get('/email', function (req, res) {
      res.render('email')
    }),
    app.get('/landing', function (req, res) {
      res.render('landing')
    }),
    app.get('/graph', function (req, res) {
      res.render('graph')
    })
  }
}