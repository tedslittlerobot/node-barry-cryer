import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import {wrapInVerticalBox} from 'src/box/vertical.js';
import {innerWidthFromBoxConfig, viewportWidth} from 'src/utils/size.js';
import {wrapInHorizontalBox} from 'src/box/horizontal.js';
import {wrapContent} from 'src/content/text.js';
import {alignContent} from 'src/content/alignment.js';
import {applyGutterToContent} from 'src/content/gutter.js';
import {type AbsoluteConfig} from 'src/types.js';

export function banner(content: string, config: AbsoluteConfig): string {
	const width = viewportWidth(80);

	const inner = innerWidthFromBoxConfig(width, config.box.horizontal);

	const contents = applyGutterToContent(
		alignContent(
			wrapContent(content, inner),
			inner - (config.gutter.size * 2),
			config.alignment,
		),
		config.gutter,
	);

	return wrapInVerticalBox(
		wrapInHorizontalBox(
			contents,
			config.box.horizontal,
		),
		config.box.vertical,
		width,
	) + '\n';
}
