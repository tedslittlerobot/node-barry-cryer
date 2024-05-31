// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {renderVerticalBox} from './vertical.js';

const formatter = (item: string) => `[${item}]`;

test('renderVerticalBox | with nothing', t => {
	const actual = renderVerticalBox([], 5, false);

	const expected = '';

	t.is(actual, expected);
});

test('renderVerticalBox | with one element', t => {
	const actual = renderVerticalBox([
		{size: 1, character: 'x', formatter},
	], 5, false);

	const expected = '[xxxxx]';

	t.is(actual, expected);
});

test('renderVerticalBox | with two elements', t => {
	const actual = renderVerticalBox([
		{size: 1, character: 'x', formatter},
		{size: 1, character: 'y', formatter},
	], 5, false);

	const expected = '[xxxxx]\n[yyyyy]';

	t.is(actual, expected);
});

test('renderVerticalBox | with two elements - reversed', t => {
	const actual = renderVerticalBox([
		{size: 1, character: 'x', formatter},
		{size: 1, character: 'y', formatter},
	], 5, true);

	const expected = '[yyyyy]\n[xxxxx]';

	t.is(actual, expected);
});
