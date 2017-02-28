import test from 'ava';
import sinon from 'sinon';
import routes from './routes';

test('It echoes a success message', (t) => {
  const res = {
    json: sinon.spy(),
  };
  routes.echo(null, res);
  const result = res.json.getCall(0).args[0];
  t.true(result.success);
  t.truthy(result.message);
  t.true(typeof result.message === 'string');
});
