import { Board } from "./board";
import { CellGenerator } from "./cellGenerator";

function main(param: g.GameMainParameterObject): void {
  const scene = new g.Scene({
    game: g.game,
    // このシーンで利用するアセットのIDを列挙し、シーンに通知します
    assetIds: ["player"],
  });
  scene.onLoad.add(() => {
    // ここからゲーム内容を記述します

    // 各アセットオブジェクトを取得します
    const cellImageAsset = scene.asset.getImageById("player");
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
