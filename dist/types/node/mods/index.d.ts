import init from '../../wasm/pkg/foras.d.js';
export { GzDecoder, GzEncoder, InitInput, InitOutput, SyncInitInput, ZlibDecoder, ZlibEncoder, gunzip, gzip, initSync, unzlib, zlib } from '../../wasm/pkg/foras.d.js';

declare function initSyncBundledOnce(): init.InitOutput;
declare function initBundledOnce(): Promise<any>;

export { initBundledOnce, initSyncBundledOnce };
