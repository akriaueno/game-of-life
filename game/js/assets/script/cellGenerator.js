window.gLocalAssetContainer["cellGenerator"] = function(g) { (function(exports, require, module, __filename, __dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellGenerator = void 0;
var cell_1 = require("./cell");
var CellGenerator = /** @class */ (function () {
    function CellGenerator(scene, cellWidth, cellHeight) {
        if (cellWidth === void 0) { cellWidth = 16; }
        if (cellHeight === void 0) { cellHeight = 16; }
        this.scene = scene;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
    }
    CellGenerator.prototype.ganerate = function () {
        return new cell_1.Cell({
            scene: this.scene,
            width: this.cellWidth,
            height: this.cellHeight,
            cssColor: "blue",
        });
    };
    return CellGenerator;
}());
exports.CellGenerator = CellGenerator;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}