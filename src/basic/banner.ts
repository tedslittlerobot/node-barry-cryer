import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import {wrapInSymmetricalVerticalBox} from 'src/box/vertical.js';
import {viewportWidth} from 'src/utils/size.js';

export function banner(content: string): string {
	const stripped = stripAnsi(content);
	const width = viewportWidth();

	const box = chalk.bgBlue.blue;

	return wrapInSymmetricalVerticalBox(
		`${box('#').repeat(5)} ${chalk.white.bold(content)} ${box('#'.repeat(5 + (width - 10 - 2 - stripped.length)))}`,
		[{size: 1, character: ' ', formatter: box}],
		width,
	);
}
