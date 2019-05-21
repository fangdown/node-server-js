
const app = require('./controllers/app')
const site = require('./controllers/site')
module.exports = {
  '/': site,
  '/api/app': app,
}