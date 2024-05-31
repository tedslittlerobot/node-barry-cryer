// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {innerWidthFromBoxConfig} from './size.js';

test('innerWidthFromBoxConfig | asymmetrical', t => {
	const actual = innerWidthFromBoxConfig(100, {
		type: 'asymmetrical',
		start: [
			{size: 5, character: ' ', formatter: () => ''},
		],
		end: [
			{size: 2, character: ' ', formatter: () => ''},
		],
	});
	t.is(actual, 93);
});

test('innerWidthFromBoxConfig | symmetrical', t => {
	const actual = innerWidthFromBoxConfig(100, {
		type: 'symmetrical',
		elements: [
			{size: 5, character: ' ', formatter: () => ''},
			{size: 2, character: ' ', formatter: () => ''},
		],
	});
	t.is(actual, 86);
});
