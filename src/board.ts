import { Cell } from "./cell";
import { CellGenerator } from "./cellGenerator";
import * as utils from "./utils";

export class Board extends g.E {
	width: number;
	height: number;
	cells: Array<Array<Cell>>;

	constructor(
		scene: g.Scene,
		width: number,
		height: number,
		cellGenerator: CellGenerator
	) {
		super({ scene });

		this.width = width;
		this.height = height;
		this.cells = new Array();

		utils.range(0, height).forEach((i) => {
			this.cells[i] = new Array();
			utils.range(0, width).forEach((j) => {
				const cell = cellGenerator.ganerate();
				this.cells[i][j] = cell;
				cell.y = i * cell.height;
				cell.x = (j % width) * cell.width;
				this.append(cell);
			});
		});

		scene.onUpdate.add(() => {
			this.goNext();
		});
	}

	goNext(): void {
		const dis = [0, -1, -1, -1, 0, 1, 1, 1];
		const djs = [1, 1, 0, -1, -1, -1, 0, 1];
		const adjCounts: Array<Array<number>> = new Array();
		utils.range(0, this.height + 2).forEach((i) => {
			adjCounts[i] = new Array();
			utils.range(0, this.width + 2).forEach((j) => {
				adjCounts[i][j] = 0;
			});
		});
		this.cells.forEach((row, i) => {
			row.forEach((cell, j) => {
				if (cell.alive) {
					utils
						.zip(dis, djs)
						.map(([di, dj]) => [i + di, j + dj])
						.forEach(([adjI, adjJ]) => {
							adjCounts[adjI + 1][adjJ + 1] += 1;
						});
				}
			});
		});

		this.cells.forEach((row, i) => {
			row.forEach((cell, j) => {
				const adjCount = adjCounts[i + 1][j + 1];
				if (cell.alive) {
					cell.alive = adjCount === 2 || adjCount === 3;
				} else {
					cell.alive = adjCount === 3;
				}
			});
		});
	}
}
