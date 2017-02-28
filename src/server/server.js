// @flow

import type { $Request, $Response, NextFunction } from 'express';
import config from './config';

module.exports = {
  getAllowedOrigin(req: $Request, res: $Response, next: NextFunction): void {
    const origin: string = req.headers.origin;
    if (config.allowedOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    next();
  },
  listen(): void {
    console.log(`Blog listening on port ${process.env.PORT || 3000}`); // eslint-disable-line no-console
  },
};
