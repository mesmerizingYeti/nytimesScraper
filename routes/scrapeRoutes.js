const { Scrapes } = require('../controllers')

module.exports = app => {

  app.get('/scrapes', (req, res) => {
    Scrapes.scrapeArticles()
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

}