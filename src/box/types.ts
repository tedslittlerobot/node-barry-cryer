import {type AxisMode, type StringFormatter} from 'src/types.js';

export type AxisBoxConfig = SymmetricalBoxConfig | AsymmetricalBoxConfig;

type BaseBoxConfig = {
	type: AxisMode;
};

export type SymmetricalBoxConfig = {
	type: 'symmetrical';
	elements: Array<BoxElement | undefined>;
} & BaseBoxConfig;

export type AsymmetricalBoxConfig = {
	type: 'asymmetrical';
	start?: Array<BoxElement | undefined>;
	end?: Array<BoxElement | undefined>;
} & BaseBoxConfig;

/**
 * A box element or layer
 */
export type BoxElement = {
	size: number;
	character: string;
	formatter: StringFormatter;
};
