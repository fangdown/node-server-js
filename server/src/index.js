const debug = require('debug')
const createApp = require('./createApp')
const routes = require('./routes')
function create() {
  debug('create app');
  return createApp({
    routes,
  });
}
create()
module.exports = create