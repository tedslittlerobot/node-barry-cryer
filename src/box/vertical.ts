import type {AxisMode} from 'src/types.js';
import {
	type AsymmetricalBoxConfig, type AxisBoxConfig, type BoxElement, type SymmetricalBoxConfig,
} from './types.js';

export function wrapInVerticalBox(content: string, config: AxisBoxConfig, width: number): string {
	return config.type === 'symmetrical' ? wrapInSymmetricalVerticalBox(content, config, width) : wrapInAsymmetricalVerticalBox(content, config, width);
}

export function wrapInAsymmetricalVerticalBox(content: string, {start, end}: AsymmetricalBoxConfig, width: number): string {
	return [
		start ? renderVerticalBox(start, width, false) : undefined,
		content,
		end ? renderVerticalBox(end, width, false) : undefined,
	].filter(Boolean).join('\n');
}

export function wrapInSymmetricalVerticalBox(content: string, {elements}: SymmetricalBoxConfig, width: number): string {
	return [
		renderVerticalBox(elements, width, false),
		content,
		renderVerticalBox(elements, width, true),
	].filter(Boolean).join('\n');
}

export function renderVerticalBox(elements: Array<BoxElement | undefined>, width: number, reverse = false): string {
	const items: string[] = elements
		.filter(element => element && element.size > 0)
		.map(element => renderVerticalBoxElement(element!, width));

	return (reverse ? items.reverse() : items).join('\n');
}

export function renderVerticalBoxElement({size: length, character, formatter}: BoxElement, width: number): string {
	return formatter(
		Array.from({length})
			.fill(character.repeat(width))
			.join('\n'),
	);
}
