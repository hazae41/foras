/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Uint8Array}
*/
declare function zlib(input: Uint8Array, compression?: number): Uint8Array;
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
declare function unzlib(input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
declare function gunzip(input: Uint8Array): Uint8Array;
/**
*/
declare class GzDecoder {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Uint8Array}
*/
  read(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  finish(): Uint8Array;
}
/**
*/
declare class GzEncoder {
  free(): void;
/**
* @param {number | undefined} compression
*/
  constructor(compression?: number);
/**
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Uint8Array}
*/
  read(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  finish(): Uint8Array;
}
/**
*/
declare class ZlibDecoder {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Uint8Array}
*/
  read(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  finish(): Uint8Array;
}
/**
*/
declare class ZlibEncoder {
  free(): void;
/**
* @param {number | undefined} compression
*/
  constructor(compression?: number);
/**
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Uint8Array}
*/
  read(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  finish(): Uint8Array;
}

type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly zlib: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_zlibencoder_free: (a: number) => void;
  readonly zlibencoder_new: (a: number, b: number) => number;
  readonly zlibencoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly zlibencoder_flush: (a: number, b: number) => void;
  readonly zlibencoder_read: (a: number, b: number) => void;
  readonly zlibencoder_finish: (a: number, b: number) => void;
  readonly gzip: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_gzencoder_free: (a: number) => void;
  readonly gzencoder_new: (a: number, b: number) => number;
  readonly gzencoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly gzencoder_flush: (a: number, b: number) => void;
  readonly gzencoder_read: (a: number, b: number) => void;
  readonly gzencoder_finish: (a: number, b: number) => void;
  readonly unzlib: (a: number, b: number, c: number) => void;
  readonly __wbg_zlibdecoder_free: (a: number) => void;
  readonly zlibdecoder_new: () => number;
  readonly zlibdecoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly zlibdecoder_flush: (a: number, b: number) => void;
  readonly zlibdecoder_read: (a: number, b: number) => void;
  readonly zlibdecoder_finish: (a: number, b: number) => void;
  readonly gunzip: (a: number, b: number, c: number) => void;
  readonly __wbg_gzdecoder_free: (a: number) => void;
  readonly gzdecoder_new: () => number;
  readonly gzdecoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly gzdecoder_flush: (a: number, b: number) => void;
  readonly gzdecoder_read: (a: number, b: number) => void;
  readonly gzdecoder_finish: (a: number, b: number) => void;
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

export { GzDecoder, GzEncoder, InitInput, InitOutput, SyncInitInput, ZlibDecoder, ZlibEncoder, init as default, gunzip, gzip, initSync, unzlib, zlib };
