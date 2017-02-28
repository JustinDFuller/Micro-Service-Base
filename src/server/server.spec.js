import test from 'ava';
import sinon from 'sinon';
import server from './server';
import config from './config';

test('It allows headers from config', (t) => {
  config.allowedOrigins.forEach((origin) => {
    const req = {
      headers: {
        origin,
      },
    };
    const res = {
      setHeader: sinon.spy(),
    };
    const next = sinon.spy();
    server.getAllowedOrigin(req, res, next);
    t.true(res.setHeader.calledWith('Access-Control-Allow-Origin', req.headers.origin));
    t.true(next.called);
  });
});

test('It does not set headers of invalid origins', (t) => {
  const req = {
    headers: {
      origin: 'http://not-allowed.com',
    },
  };
  const res = {
    setHeader: sinon.spy(),
  };
  const next = sinon.spy();
  server.getAllowedOrigin(req, res, next);
  t.false(res.setHeader.called);
  t.true(next.called);
});

test('Listen does not throw an error.', (t) => {
  t.notThrows(server.listen);
});
