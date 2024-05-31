import {stdout} from 'node:process';

export function viewportWidth(max?: number) {
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
