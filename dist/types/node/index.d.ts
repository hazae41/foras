import * as index from './mods/index.js';
export { index as Foras };
export { initBundledOnce, initSyncBundledOnce } from './mods/index.js';
export { DeflateDecoder, DeflateEncoder, GzDecoder, GzEncoder, InitInput, InitOutput, SyncInitInput, ZlibDecoder, ZlibEncoder, deflate, gunzip, gzip, inflate, initSync, unzlib, zlib } from '../wasm/pkg/foras.d.js';
