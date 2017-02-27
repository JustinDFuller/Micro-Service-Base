// @flow

import type { $Request, $Response } from 'express';
import server from './../server/server';

module.exports = {
  echo(req: $Request, res: $Response): void {
    server.getAllowedOrigin(req, res);
    res.json({ success: true, message: 'This is an echo URL that confirms your connection.' });
  },
};
