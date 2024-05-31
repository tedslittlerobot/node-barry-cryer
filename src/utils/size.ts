import {stdout} from 'node:process';
import {type AxisBoxConfig} from 'src/box/types.js';

export function viewportWidth(max?: number): number {
	max ??= 120;

	if (!stdout.getWindowSize) {
		return max;
	}

	const [width] = stdout.getWindowSize();

	if (width > max) {
		return max;
	}

	return width;
}

export function innerWidthFromBoxConfig(viewport: number, box: AxisBoxConfig): number {
	switch (box.type) {
		case 'symmetrical': {
			const width = box.elements.map(item => item?.size ?? 0)
				.reduce((m, n) => m + n, 0);

			return innerWidth(viewport, width, width);
		}

		case 'asymmetrical': {
			return innerWidth(
				viewport,
				box.start ? box.start.map(item => item?.size ?? 0).reduce((m, n) => m + n, 0) : 0,
				box.end ? box.end.map(item => item?.size ?? 0).reduce((m, n) => m + n, 0) : 0,
			);
		}
	}
}

export function innerWidth(viewport: number, leading: number, trailing?: number): number {
	trailing ??= leading;

	return viewport - leading - trailing;
}
