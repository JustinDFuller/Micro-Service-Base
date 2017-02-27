// @flow

import type { $Request, $Response } from 'express';
import config from './config';

module.exports = {
  getAllowedOrigin(req: $Request, res: $Response): void {
    const origin = req.headers.origin;
    if (config.allowedOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  },
  listen() {
    console.log(`Blog listening on port ${process.env.PORT || 3000}`); // eslint-disable-line no-console
  },
};
