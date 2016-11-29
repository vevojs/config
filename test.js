import test from 'ava';
import config from './';

test(t => {
	t.true(config.get('app.name') === 'vevo');
	t.is(config.get('app.name'), 'vevo');
});
