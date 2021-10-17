import { Board } from "./board";
import { CellGenerator } from "./cellGenerator";

function main(param: g.GameMainParameterObject): void {
  const scene = new g.Scene({
    game: g.game,
  });
  scene.onLoad.add(() => {
    // ここからゲーム内容を記述します

    // 各アセットオブジェクトを取得します
    const cellGenerator = new CellGenerator(scene);

    const BOARD_WIDTH = 50;
    const BOARD_HEIGHT = 20;
    const board = new Board(scene, BOARD_WIDTH, BOARD_HEIGHT, cellGenerator);
    scene.append(board);
    // ここまでゲーム内容を記述します
  });
  g.game.pushScene(scene);
}

export = main;
