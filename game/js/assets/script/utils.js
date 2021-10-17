window.gLocalAssetContainer["utils"] = function(g) { (function(exports, require, module, __filename, __dirname) {
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = exports.uniform = exports.range = void 0;
exports.range = function (begin, end) {
    return __spreadArrays(Array(end - begin)).map(function (_, i) { return begin + i; });
};
exports.uniform = function (a, b) {
    return -a + (b - a) * g.game.random.generate();
};
function zip(firstCollection, lastCollection) {
    var length = Math.min(firstCollection.length, lastCollection.length);
    var zipped = [];
    for (var index = 0; index < length; index++) {
        zipped.push([firstCollection[index], lastCollection[index]]);
    }
    return zipped;
}
exports.zip = zip;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}