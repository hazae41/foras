import init from '../../wasm/pkg/foras.d.js';
export { DeflateDecoder, DeflateEncoder, GzDecoder, GzEncoder, InitInput, InitOutput, SyncInitInput, ZlibDecoder, ZlibEncoder, deflate, gunzip, gzip, inflate, initSync, unzlib, zlib } from '../../wasm/pkg/foras.d.js';

declare function initSyncBundledOnce(): init.InitOutput;
declare function initBundledOnce(): Promise<any>;

export { initBundledOnce, initSyncBundledOnce };
