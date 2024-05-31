import {type StringFormatter} from 'src/types.js';
import stripAnsi from 'strip-ansi';

export type AlignmentConfig = {
	position: AlignmentPosition;
	formatter: StringFormatter;
};

export type AlignmentPosition = 'leading' | 'centre' | 'trailing';

const aligners: Record<AlignmentPosition, AlignerFunction> = {
	leading: alignLeading,
	centre: alignCenter,
	trailing: alignTrailing,
} as const;

export function alignContent(content: string[], width: number, {position, formatter}: AlignmentConfig): string[] {
	return content.map(item => aligners[position](item, width, formatter));
}

type AlignerFunction = (item: string, width: number, formatter: StringFormatter) => string;

export function alignLeading(item: string, width: number, formatter: StringFormatter): string {
	return item + formatter(' '.repeat(width - stripAnsi(item).length));
}

export function alignCenter(item: string, width: number, formatter: StringFormatter): string {
	const total = width - stripAnsi(item).length;
	const isOdd = total % 2 === 1;
	const amount = isOdd ? ((total - 1) / 2) : (total / 2);

	const leading = amount;
	const trailing = isOdd ? amount + 1 : amount;

	return formatter(' '.repeat(leading)) + item + formatter(' '.repeat(trailing));
}

export function alignTrailing(item: string, width: number, formatter: StringFormatter): string {
	return formatter(' '.repeat(width - stripAnsi(item).length)) + item;
}
