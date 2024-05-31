// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {renderHorizontalBoxElement} from './horizontal.js';

test('renderHorizontalBoxElement | with 1 line', t => {
	const actual = renderHorizontalBoxElement({
		character: 'x',
		size: 5,
		formatter(item) {
			return `[${item}]`;
		},
	});

	const expected = '[xxxxx]';

	t.is(actual, expected);
});
