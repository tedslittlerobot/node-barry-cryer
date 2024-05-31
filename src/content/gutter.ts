import {type StringFormatter} from 'src/types.js';

export type GutterConfig = {
	size: number;
	formatter: StringFormatter;
};

export function applyGutterToContent(contents: string[], {size, formatter}: GutterConfig): string[] {
	const gutter = formatter(' '.repeat(size));

	return contents.map(content => `${gutter}${content}${gutter}`);
}
