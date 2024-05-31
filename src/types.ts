import {type AxisBoxConfig, BoxElement} from './box/types.js';
import {type AlignmentConfig} from './content/alignment.js';
import {type GutterConfig} from './content/gutter.js';

/**
 * A function to format a given string. This should only add ANSI codes.
 */
export type StringFormatter = (...input: string[]) => string;

export type AxisMode = 'symmetrical' | 'asymmetrical';

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

export type AbsoluteConfig = {
	gutter: GutterConfig;
	alignment: AlignmentConfig;
	box: {
		vertical: AxisBoxConfig;
		horizontal: AxisBoxConfig;
	};
};
