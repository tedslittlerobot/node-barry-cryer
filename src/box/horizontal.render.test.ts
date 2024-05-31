// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {renderHorizontalBox} from './horizontal.js';

test('renderHorizontalBox | with one element', t => {
	const actual = renderHorizontalBox([{
		character: 'x',
		size: 5,
		formatter(item) {
			return `[${item}]`;
		},
	}]);

	const expected = '[xxxxx]';

	t.is(actual, expected);
});

test('renderHorizontalBox | with two elements', t => {
	const actual = renderHorizontalBox([
		{
			character: 'x',
			size: 5,
			formatter(item) {
				return `[${item}]`;
			},
		},
		{
			character: 'y',
			size: 5,
			formatter(item) {
				return `[${item}]`;
			},
		},
	]);

	const expected = '[xxxxx][yyyyy]';

	t.is(actual, expected);
});

test('renderHorizontalBox | with two elements, reversed', t => {
	const actual = renderHorizontalBox([
		{
			character: 'x',
			size: 5,
			formatter(item) {
				return `[${item}]`;
			},
		},
		{
			character: 'y',
			size: 5,
			formatter(item) {
				return `[${item}]`;
			},
		},
	], true);

	const expected = '[yyyyy][xxxxx]';

	t.is(actual, expected);
});
