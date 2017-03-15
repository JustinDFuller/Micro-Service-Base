import cache from 'apicache';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import server from './../server/server';
import routes from './../routes/routes';

function init() {
  const app = express();
  // Make sure requests can be parsed.
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // GZIP compression
  app.use(compression());
  // Security
  app.use(helmet());
  // Make sure proper allowed origins are sent.
  app.use(server.getAllowedOrigin);
  // Simple echo route to confirm if things are working.
  app.all('/echo', cache.middleware('1 hour'), routes.echo);
  // Use PORT variable for heroku.
  app.listen(process.env.PORT || 3000, server.listen);
}

module.exports = init;
