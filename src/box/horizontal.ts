import {
	type AsymmetricalBoxConfig, type AxisBoxConfig, type BoxElement, type SymmetricalBoxConfig,
} from './types.js';

export function wrapInHorizontalBox(contents: string[], config: AxisBoxConfig): string {
	return config.type === 'symmetrical' ? wrapInSymmetricalHorizontalBox(contents, config) : wrapInAsymmetricalHorizontalBox(contents, config);
}

export function wrapInAsymmetricalHorizontalBox(contents: string[], {start, end}: AsymmetricalBoxConfig): string {
	return contents.map(content => [
		start ? renderHorizontalBox(start, false) : undefined,
		content,
		end ? renderHorizontalBox(end, false) : undefined,
	].filter(Boolean).join('')).join('\n');
}

export function wrapInSymmetricalHorizontalBox(contents: string[], {elements}: SymmetricalBoxConfig): string {
	return contents.map(content => [
		renderHorizontalBox(elements, false),
		content,
		renderHorizontalBox(elements, true),
	].filter(Boolean).join('')).join('\n');
}

export function renderHorizontalBox(elements: Array<BoxElement | undefined>, reverse = false): string {
	const items: string[] = elements
		.filter(element => element && element.size > 0)
		.map(element => renderHorizontalBoxElement(element!));

	return (reverse ? items.reverse() : items).join('');
}

export function renderHorizontalBoxElement({size, character, formatter}: BoxElement): string {
	return formatter(character.repeat(size));
}
