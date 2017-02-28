// @flow

import type { $Request, $Response } from 'express';

module.exports = {
  echo(req: $Request, res: $Response): void {
    res.json({ success: true, message: 'This is an echo URL that confirms your connection.' });
  },
};
