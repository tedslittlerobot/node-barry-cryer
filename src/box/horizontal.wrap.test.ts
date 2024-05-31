// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {wrapInAsymmetricalHorizontalBox, wrapInHorizontalBox, wrapInSymmetricalHorizontalBox} from './horizontal.js';

test('wrapInAsymmetricalHorizontalBox | with 2 lines', t => {
	const actual = wrapInHorizontalBox(['foo', 'bar'], {
		type: 'asymmetrical',
		start: [{
			character: 'x',
			size: 5,
			formatter(item) {
				return `[${item}]`;
			},
		}],
		end: [{
			character: 'y',
			size: 5,
			formatter(item) {
				return `[${item}]`;
			},
		}],
	});

	const expected = '[xxxxx]foo[yyyyy]\n[xxxxx]bar[yyyyy]';

	t.is(actual, expected);
});

test('wrapInSymmetricalHorizontalBox | with 2 lines', t => {
	const actual = wrapInHorizontalBox(['foo', 'bar'], {
		type: 'symmetrical',
		elements: [
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
		],
	});

	const expected = '[xxxxx][yyyyy]foo[yyyyy][xxxxx]\n[xxxxx][yyyyy]bar[yyyyy][xxxxx]';

	t.is(actual, expected);
});
