import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

const helmet = sinon.spy();
const compression = sinon.spy();
const expressMock = {
  use: sinon.spy(),
  all: sinon.spy(),
  listen: sinon.spy(),
};

const init = proxyquire('./init', {
  express: () => expressMock,
  helmet,
  compression,
});

test('Make sure all the different deps are used. No logic tests just integration.', (t) => {
  t.falsy(expressMock.listen.called);
  t.falsy(helmet.called);
  t.falsy(compression.called);
  init();
  t.truthy(expressMock.listen.called);
  t.truthy(helmet.called);
  t.truthy(compression.called);
});
