// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {wrapInVerticalBox} from './vertical.js';

const formatter = (item: string) => `[${item}]`;

test('wrapInVerticalBox | with no box', t => {
	const actual = wrapInVerticalBox('foo', [], 5);

	const expected = 'foo';

	t.is(actual, expected);
});

test('wrapInVerticalBox | with box', t => {
	const actual = wrapInVerticalBox('foo', [
		{size: 1, character: 'x', formatter},
	], 5);

	const expected = '[xxxxx]\nfoo\n[xxxxx]';

	t.is(actual, expected);
});

test('wrapInVerticalBox | with layered box', t => {
	const actual = wrapInVerticalBox('foo', [
		{size: 1, character: 'x', formatter},
		{size: 1, character: 'y', formatter},
	], 5);

	const expected = '[xxxxx]\n[yyyyy]\nfoo\n[yyyyy]\n[xxxxx]';

	t.is(actual, expected);
});
