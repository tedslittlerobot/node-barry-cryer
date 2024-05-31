// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {renderVerticalBoxElement} from './vertical.js';

test('renderVerticalBoxElement | with 1 line', t => {
	const actual = renderVerticalBoxElement({
		character: 'x',
		size: 1,
		formatter(item) {
			return `[${item}]`;
		},
	}, 5);

	const expected = '[xxxxx]';

	t.is(actual, expected);
});

test('renderVerticalBoxElement | with multiple lines', t => {
	const actual = renderVerticalBoxElement({
		character: 'x',
		size: 3,
		formatter(item) {
			return `[${item}]`;
		},
	}, 5);

	const expected = '[xxxxx\nxxxxx\nxxxxx]';

	t.is(actual, expected);
});
