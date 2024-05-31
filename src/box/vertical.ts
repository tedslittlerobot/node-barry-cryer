import type {BoxElement} from 'src/types.js';

export function wrapInVerticalBox(content: string, top: Array<BoxElement | undefined> | undefined, bottom: Array<BoxElement | undefined> | undefined, width: number) {
	return [
		top ? renderVerticalBox(top, width, false) : undefined,
		content,
		bottom ? renderVerticalBox(bottom, width, false) : undefined,
	].filter(Boolean).join('\n');
}

export function wrapInSymmetricalVerticalBox(content: string, elements: Array<BoxElement | undefined>, width: number) {
	return [
		renderVerticalBox(elements, width, false),
		content,
		renderVerticalBox(elements, width, true),
	].filter(Boolean).join('\n');
}

export function renderVerticalBox(elements: Array<BoxElement | undefined>, width: number, reverse = false) {
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
