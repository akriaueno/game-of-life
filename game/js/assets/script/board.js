window.gLocalAssetContainer["board"] = function(g) { (function(exports, require, module, __filename, __dirname) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var utils = require("./utils");
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(scene, width, height, cellGenerator) {
        var _this = _super.call(this, { scene: scene }) || this;
        _this.width = width;
        _this.height = height;
        _this.cells = new Array();
        utils.range(0, height).forEach(function (i) {
            _this.cells[i] = new Array();
            utils.range(0, width).forEach(function (j) {
                var cell = cellGenerator.ganerate();
                _this.cells[i][j] = cell;
                cell.y = i * cell.height;
                cell.x = (j % width) * cell.width;
                _this.append(cell);
            });
        });
        scene.onUpdate.add(function () {
            _this.goNext();
        });
        return _this;
    }
    Board.prototype.goNext = function () {
        var _this = this;
        var dis = [0, -1, -1, -1, 0, 1, 1, 1];
        var djs = [1, 1, 0, -1, -1, -1, 0, 1];
        var adjCounts = new Array();
        if (this === undefined)
            return;
        utils.range(0, this.height + 2).forEach(function (i) {
            adjCounts[i] = new Array();
            utils.range(0, _this.width + 2).forEach(function (j) {
                adjCounts[i][j] = 0;
            });
        });
        this.cells.forEach(function (row, i) {
            row.forEach(function (cell, j) {
                if (cell.alive) {
                    utils
                        .zip(dis, djs)
                        .map(function (_a) {
                        var di = _a[0], dj = _a[1];
                        return [i + di, j + dj];
                    })
                        .forEach(function (_a) {
                        var adjI = _a[0], adjJ = _a[1];
                        adjCounts[adjI + 1][adjJ + 1] += 1;
                    });
                }
            });
        });
        this.cells.forEach(function (row, i) {
            row.forEach(function (cell, j) {
                var adjCount = adjCounts[i + 1][j + 1];
                if (cell.alive) {
                    cell.alive = adjCount === 2 || adjCount === 3;
                }
                else {
                    cell.alive = adjCount === 3;
                }
            });
        });
    };
    return Board;
}(g.E));
exports.Board = Board;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}