
/**
 * A function to format a given string. This should only add ANSI codes.
 */
export type StringFormatter = (...input: string[]) => string;

/**
 * A box element or layer
 */
export type BoxElement = {
	size: number;
	character: string;
	formatter: StringFormatter;
};

/**
 * A vertical placement position - top or bottom
 */
export type VerticalPosition = 'top' | 'bottom';

/**
 * A horiztonal placement position. Options are:
 *   - leading (left in LTR orientation)
 *   - trailing (right in LTR orientation)
 */
export type HorizontalPosition = 'leading' | 'trailing';
