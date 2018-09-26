module.exports = {
  bind: function (app) {
    app.get('/email', function (req, res) {
      res.render('email')
    }),
    app.get('/landing', function (req, res) {
      res.render('landing')
    }),
      app.get('/landing2', function (req, res) {
        res.render('landing2')
      }),
      app.get('/landing-drupal', function (req, res) {
        res.render('landing-drupal')
      }),
    app.get('/graph', function (req, res) {
      res.render('graph')
    })
  }
}