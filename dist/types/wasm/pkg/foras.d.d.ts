/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Uint8Array}
*/
declare function deflate(input: Uint8Array, compression?: number): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
declare function inflate(input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Uint8Array}
*/
declare function gzip(input: Uint8Array, compression?: number): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
declare function gunzip(input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Uint8Array}
*/
declare function zlib(input: Uint8Array, compression?: number): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
declare function unzlib(input: Uint8Array): Uint8Array;

type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly deflate: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly inflate: (a: number, b: number, c: number) => void;
  readonly gzip: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly gunzip: (a: number, b: number, c: number) => void;
  readonly zlib: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly unzlib: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
declare function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

export { InitInput, InitOutput, SyncInitInput, init as default, deflate, gunzip, gzip, inflate, initSync, unzlib, zlib };
