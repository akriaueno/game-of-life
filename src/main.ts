import { Board } from "./board";
import { CellGenerator } from "./cellGenerator";

function main(param: g.GameMainParameterObject): void {
	const scene = new g.Scene({
		game: g.game,
	});
	scene.onLoad.add(() => {
		// ここからゲーム内容を記述します

		// 各アセットオブジェクトを取得します
		const cellSize = 16;
		const cellGenerator = new CellGenerator(scene, cellSize, cellSize);

		const boardWidth = Math.floor(g.game.width / cellSize);
		const boardHeight = Math.floor(g.game.height / cellSize);
		const board = new Board(scene, boardWidth, boardHeight, cellGenerator);
		scene.append(board);
		// ここまでゲーム内容を記述します
	});
	g.game.pushScene(scene);
}

export = main;
