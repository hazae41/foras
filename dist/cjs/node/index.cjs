'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./mods/index.cjs');
var foras = require('../wasm/pkg/foras.cjs');



exports.Foras = index;
exports.initBundledOnce = index.initBundledOnce;
exports.initSyncBundledOnce = index.initSyncBundledOnce;
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
//# sourceMappingURL=index.cjs.map
