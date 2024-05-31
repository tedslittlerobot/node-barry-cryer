// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {wrapInSymmetricalVerticalBox, wrapInAsymmetricalVerticalBox, wrapInVerticalBox} from './vertical.js';

const formatter = (item: string) => `[${item}]`;

test('wrapInAsymmetricalVerticalBox | with no box', t => {
	const actual = wrapInVerticalBox('foo', {type: 'asymmetrical'}, 5);

	const expected = 'foo';

	t.is(actual, expected);
});

test('wrapInAsymmetricalVerticalBox | with top', t => {
	const actual = wrapInVerticalBox('foo', {
		type: 'asymmetrical',
		start: [
			{size: 1, character: 'x', formatter},
			{size: 1, character: 'y', formatter},
		],
	}, 5);

	const expected = '[xxxxx]\n[yyyyy]\nfoo';

	t.is(actual, expected);
});

test('wrapInAsymmetricalVerticalBox | with bottom', t => {
	const actual = wrapInVerticalBox('foo', {
		type: 'asymmetrical',
		end: [
			{size: 1, character: 'x', formatter},
			{size: 1, character: 'y', formatter},
		],
	}, 5);

	const expected = 'foo\n[xxxxx]\n[yyyyy]';

	t.is(actual, expected);
});

test('wrapInAsymmetricalVerticalBox | with top and bottom', t => {
	const actual = wrapInVerticalBox('foo', {
		type: 'asymmetrical',
		start: [
			{size: 1, character: 'x', formatter},
			{size: 1, character: 'y', formatter},
		],
		end: [
			{size: 1, character: 'a', formatter},
			{size: 1, character: 'b', formatter},
		],
	}, 5);

	const expected = '[xxxxx]\n[yyyyy]\nfoo\n[aaaaa]\n[bbbbb]';

	t.is(actual, expected);
});

test('wrapInSymmetricalVerticalBox | with no box', t => {
	const actual = wrapInVerticalBox('foo', {
		type: 'symmetrical',
		elements: [],
	}, 5);

	const expected = 'foo';

	t.is(actual, expected);
});

test('wrapInSymmetricalVerticalBox | with box', t => {
	const actual = wrapInVerticalBox('foo', {
		type: 'symmetrical',
		elements: [
			{size: 1, character: 'x', formatter},
		],
	}, 5);

	const expected = '[xxxxx]\nfoo\n[xxxxx]';

	t.is(actual, expected);
});

test('wrapInSymmetricalVerticalBox | with layered box', t => {
	const actual = wrapInVerticalBox('foo', {
		type: 'symmetrical',
		elements: [
			{size: 1, character: 'x', formatter},
			{size: 1, character: 'y', formatter},
		],
	}, 5);

	const expected = '[xxxxx]\n[yyyyy]\nfoo\n[yyyyy]\n[xxxxx]';

	t.is(actual, expected);
});
