import test from 'ava';
import m from '.';

test('parse resolution', t => {
	t.deepEqual(m('1024x768'), {width: 1024, height: 768});
	t.deepEqual(m('1280x1024'), {width: 1280, height: 1024});
	t.deepEqual(m('1280X1024'), {width: 1280, height: 1024});
	t.deepEqual(m('foo 1280X1024 bar'), {width: 1280, height: 1024});
	t.deepEqual(m('foo1280X1024bar'), {width: 1280, height: 1024});
	t.deepEqual(m('1280xAsd'), {});
});

test('accepts a string', t => {
	t.throws(() => m(123), 'Expected a string, got number');
});
