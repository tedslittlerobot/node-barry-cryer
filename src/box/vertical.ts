import type {BoxElement, VerticalPosition} from 'src/types.js';

export function wrapInVerticalBox(content: string, elements: Array<BoxElement | undefined>, width: number) {
	return [
		renderVerticalBox(elements, width, 'top'),
		content,
		renderVerticalBox(elements, width, 'bottom'),
	].filter(Boolean).join('\n');
}

export function renderVerticalBox(elements: Array<BoxElement | undefined>, width: number, position: VerticalPosition) {
	const items: string[] = elements
		.filter(element => element && element.size > 0)
		.map(element => renderVerticalBoxElement(element!, width));

	return (position === 'bottom' ? items.reverse() : items).join('\n');
}

export function renderVerticalBoxElement({size: length, character, formatter}: BoxElement, width: number): string {
	return formatter(
		Array.from({length})
			.fill(character.repeat(width))
			.join('\n'),
	);
}
