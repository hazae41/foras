import * as index from './mods/index.js';
export { index as Foras };
export { initBundledOnce, initSyncBundledOnce } from './mods/index.js';
export { GzDecoder, GzEncoder, InitInput, InitOutput, SyncInitInput, ZlibDecoder, ZlibEncoder, gunzip, gzip, initSync, unzlib, zlib } from '../wasm/pkg/foras.d.js';
