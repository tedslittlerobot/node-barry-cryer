// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {wrapInSymmetricalVerticalBox, wrapInVerticalBox} from './vertical.js';

const formatter = (item: string) => `[${item}]`;

test('wrapInVerticalBox | with no box', t => {
	const actual = wrapInVerticalBox('foo', undefined, undefined, 5);

	const expected = 'foo';

	t.is(actual, expected);
});

test('wrapInVerticalBox | with top', t => {
	const actual = wrapInVerticalBox('foo', [
		{size: 1, character: 'x', formatter},
		{size: 1, character: 'y', formatter},
	], undefined, 5);

	const expected = '[xxxxx]\n[yyyyy]\nfoo';

	t.is(actual, expected);
});

test('wrapInVerticalBox | with bottom', t => {
	const actual = wrapInVerticalBox('foo', undefined, [
		{size: 1, character: 'x', formatter},
		{size: 1, character: 'y', formatter},
	], 5);

	const expected = 'foo\n[xxxxx]\n[yyyyy]';

	t.is(actual, expected);
});

test('wrapInVerticalBox | with top and bottom', t => {
	const actual = wrapInVerticalBox('foo', [
		{size: 1, character: 'x', formatter},
		{size: 1, character: 'y', formatter},
	], [
		{size: 1, character: 'a', formatter},
		{size: 1, character: 'b', formatter},
	], 5);

	const expected = '[xxxxx]\n[yyyyy]\nfoo\n[aaaaa]\n[bbbbb]';

	t.is(actual, expected);
});

test('wrapInSymmetricalVerticalBox | with no box', t => {
	const actual = wrapInSymmetricalVerticalBox('foo', [], 5);

	const expected = 'foo';

	t.is(actual, expected);
});

test('wrapInSymmetricalVerticalBox | with box', t => {
	const actual = wrapInSymmetricalVerticalBox('foo', [
		{size: 1, character: 'x', formatter},
	], 5);

	const expected = '[xxxxx]\nfoo\n[xxxxx]';

	t.is(actual, expected);
});

test('wrapInSymmetricalVerticalBox | with layered box', t => {
	const actual = wrapInSymmetricalVerticalBox('foo', [
		{size: 1, character: 'x', formatter},
		{size: 1, character: 'y', formatter},
	], 5);

	const expected = '[xxxxx]\n[yyyyy]\nfoo\n[yyyyy]\n[xxxxx]';

	t.is(actual, expected);
});
