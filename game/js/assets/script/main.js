window.gLocalAssetContainer["main"] = function(g) { (function(exports, require, module, __filename, __dirname) {
var board_1 = require("./board");
var cellGenerator_1 = require("./cellGenerator");
function main(param) {
    var scene = new g.Scene({
        game: g.game,
    });
    scene.onLoad.add(function () {
        // ここからゲーム内容を記述します
        // 各アセットオブジェクトを取得します
        var cellSize = 16;
        var cellGenerator = new cellGenerator_1.CellGenerator(scene, cellSize, cellSize);
        var boardWidth = Math.floor(g.game.width / cellSize);
        var boardHeight = Math.floor(g.game.height / cellSize);
        var board = new board_1.Board(scene, boardWidth, boardHeight, cellGenerator);
        scene.append(board);
        // ここまでゲーム内容を記述します
    });
    g.game.pushScene(scene);
}
module.exports = main;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}