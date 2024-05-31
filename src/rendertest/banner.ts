import {stderr} from 'node:process';
import chalk from 'chalk';
import {banner} from 'src/basic/banner.js';

stderr.write(banner('Foo Bar', {
	gutter: {size: 5, formatter: String},
	alignment: {position: 'leading', formatter: String},
	box: {
		vertical: {
			type: 'symmetrical',
			elements: [{size: 1, character: ' ', formatter: chalk.bgBlue}],
		},
		horizontal: {
			type: 'symmetrical',
			elements: [{size: 2, character: ' ', formatter: chalk.bgBlue}],
		},
	},
}));
