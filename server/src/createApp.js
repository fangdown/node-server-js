const debug = require('debug')('server');
const express = require("express");
const bodyParser = require("body-parser");

function createApp(settings) {
  debug('create express app');
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const {routes} = settings
//   for (const middleware of middlewares) {
//       if (typeof middleware !== 'function')
//           continue;
//       app.use(middleware);
//   }
  // use all routes
  for (const route in routes) {
      const handle = routes[route];
      if (typeof handle !== 'function')
          continue;
      app.use(route, handle);
  }
  app.listen('3100', function(){
      console.log('服务已经启动')
 })
  return app;
}
module.exports = createApp
