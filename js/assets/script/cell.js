window.gLocalAssetContainer["cell"] = function(g) { (function(exports, require, module, __filename, __dirname) {
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
exports.Cell = void 0;
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(param) {
        var _this = _super.call(this, param) || this;
        _this.alive = g.game.random.generate() >= 0.5;
        _this.onUpdate.add(function () {
            if (_this.alive) {
                _this.show();
            }
            else {
                _this.hide();
            }
        });
        _this.modified();
        return _this;
    }
    return Cell;
}(g.FilledRect));
exports.Cell = Cell;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}