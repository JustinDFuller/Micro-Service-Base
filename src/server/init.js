import cache from 'apicache';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import server from './../server/server';
import routes from './../routes/routes';

function init() {
  const app = express();
  app.use(compression());
  app.use(helmet());
  app.use(server.getAllowedOrigin);
  app.all('/echo', cache.middleware('1 hour'), routes.echo);
  app.listen(process.env.PORT || 3000, server.listen);
}

module.exports = init;
