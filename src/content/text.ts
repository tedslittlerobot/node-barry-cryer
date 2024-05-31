import {StringFormatter} from 'src/types.js';
import wrapAnsi from 'wrap-ansi';

export function wrapContent(content: string, width: number): string[] {
	return wrapAnsi(content, width, {hard: true}).split('\n');
}
