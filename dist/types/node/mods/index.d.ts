import init from '../../wasm/pkg/foras.d.js';
export { InitInput, InitOutput, SyncInitInput, deflate, gunzip, gzip, inflate, initSync, unzlib, zlib } from '../../wasm/pkg/foras.d.js';

declare function initSyncBundledOnce(): init.InitOutput;
declare function initBundledOnce(): Promise<any>;

export { initBundledOnce, initSyncBundledOnce };
