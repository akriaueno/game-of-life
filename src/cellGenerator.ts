import { Cell } from "./cell";

export class CellGenerator {
	scene: g.Scene;
	cellWidth: number;
	cellHeight: number;

	constructor(scene: g.Scene, cellWidth: number = 32, cellHeight: number = 32) {
		this.scene = scene;
		this.cellWidth = cellWidth;
		this.cellHeight = cellHeight;
	}

	ganerate(): Cell {
		return new Cell({
			scene: this.scene,
			width: this.cellWidth,
			height: this.cellHeight,
			cssColor: "blue",
		});
	}
}
