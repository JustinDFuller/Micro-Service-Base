import test from 'ava';
import config from './config';

test('It allows headers from config', (t) => {
  config.allowedOrigins.forEach((origin) => {
    t.true(typeof origin === 'string');
  });
});
