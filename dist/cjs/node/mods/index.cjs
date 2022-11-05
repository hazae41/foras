'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var foras = require('../../wasm/pkg/foras.cjs');
var foras_wasm = require('../../wasm/pkg/foras.wasm.cjs');

var output = undefined;
function initSyncBundledOnce() {
    return output !== null && output !== void 0 ? output : (output = foras.initSync(Buffer.from(foras_wasm.wasm, "base64")));
}
function initBundledOnce() {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_a) {
            return [2 /*return*/, output !== null && output !== void 0 ? output : (output = foras["default"](Buffer.from(foras_wasm.wasm, "base64")))];
        });
    });
}

exports.DeflateDecoder = foras.DeflateDecoder;
exports.DeflateEncoder = foras.DeflateEncoder;
exports.GzDecoder = foras.GzDecoder;
exports.GzEncoder = foras.GzEncoder;
exports.ZlibDecoder = foras.ZlibDecoder;
exports.ZlibEncoder = foras.ZlibEncoder;
exports.deflate = foras.deflate;
exports.gunzip = foras.gunzip;
exports.gzip = foras.gzip;
exports.inflate = foras.inflate;
exports.initSync = foras.initSync;
exports.unzlib = foras.unzlib;
exports.zlib = foras.zlib;
exports.initBundledOnce = initBundledOnce;
exports.initSyncBundledOnce = initSyncBundledOnce;
//# sourceMappingURL=index.cjs.map
