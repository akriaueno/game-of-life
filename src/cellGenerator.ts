import { Cell } from "./cell";

export class CellGenerator {
	scene: g.Scene;
	cellImageAsset: g.ImageAsset;

	constructor(scene: g.Scene, cellImageAsset: g.ImageAsset) {
		this.scene = scene;
		this.cellImageAsset = cellImageAsset;
	}

	ganerate(): Cell {
		return new Cell({
			scene: this.scene,
			src: this.cellImageAsset,
			width: this.cellImageAsset.width,
			height: this.cellImageAsset.height,
		});
	}
}
