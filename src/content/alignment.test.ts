// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava';
import {alignContent} from './alignment.js';

const formatter = (item: string) => `[${item}]`;

test('alignContent | leading', t => {
	const actual = alignContent(['foo', 'monkey'], 10, {position: 'leading', formatter});
	const expected = ['foo[       ]', 'monkey[    ]'];

	t.deepEqual(actual, expected);
});

test('alignContent | trailing', t => {
	const actual = alignContent(['foo', 'monkey'], 10, {position: 'trailing', formatter});
	const expected = ['[       ]foo', '[    ]monkey'];

	t.deepEqual(actual, expected);
});

test('alignContent | centre', t => {
	const actual = alignContent(['foo', 'monkey'], 10, {position: 'centre', formatter});
	const expected = ['[   ]foo[    ]', '[  ]monkey[  ]'];

	t.deepEqual(actual, expected);
});
