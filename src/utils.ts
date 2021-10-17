export const range = (begin: number, end: number): Array<number> =>
	[...Array(end - begin)].map((_, i) => begin + i);

export const uniform = (a: number, b: number): number => {
	return -a + (b - a) * g.game.random.generate();
};

export function zip<T, U>(
	firstCollection: Array<T>,
	lastCollection: Array<U>
): Array<[T, U]> {
	const length = Math.min(firstCollection.length, lastCollection.length);
	const zipped: Array<[T, U]> = [];

	for (let index = 0; index < length; index++) {
		zipped.push([firstCollection[index], lastCollection[index]]);
	}

	return zipped;
}
