/* tslint:disable */
/* eslint-disable */
/**
* @param {Memory} input
* @returns {Memory}
*/
export function gunzip(input: Memory): Memory;
/**
* @param {Memory} input
* @param {number | undefined} compression
* @returns {Memory}
*/
export function deflate(input: Memory, compression?: number): Memory;
/**
* @param {Memory} input
* @param {number | undefined} compression
* @returns {Memory}
*/
export function zlib(input: Memory, compression?: number): Memory;
/**
* @param {Memory} input
* @param {number | undefined} compression
* @returns {Memory}
*/
export function gzip(input: Memory, compression?: number): Memory;
/**
* @param {Memory} input
* @returns {Memory}
*/
export function inflate(input: Memory): Memory;
/**
* @param {Memory} input
* @returns {Memory}
*/
export function unzlib(input: Memory): Memory;
/**
*/
export class DeflateDecoder {
  [Symbol.dispose](): void
  free(): void;
/**
*/
  constructor();
/**
* @param {Memory} input
*/
  write(input: Memory): void;
/**
*/
  flush(): void;
/**
* @returns {Memory}
*/
  read(): Memory;
/**
* @returns {Memory}
*/
  finish(): Memory;
}
/**
*/
export class DeflateEncoder {
  [Symbol.dispose](): void
  free(): void;
/**
* @param {number | undefined} compression
*/
  constructor(compression?: number);
/**
* @param {Memory} input
*/
  write(input: Memory): void;
/**
*/
  flush(): void;
/**
* @returns {Memory}
*/
  read(): Memory;
/**
* @returns {Memory}
*/
  finish(): Memory;
}
/**
*/
export class GzDecoder {
  [Symbol.dispose](): void
  free(): void;
/**
*/
  constructor();
/**
* @param {Memory} input
*/
  write(input: Memory): void;
/**
*/
  flush(): void;
/**
* @returns {Memory}
*/
  read(): Memory;
/**
* @returns {Memory}
*/
  finish(): Memory;
}
/**
*/
export class GzEncoder {
  [Symbol.dispose](): void
  free(): void;
/**
* @param {number | undefined} compression
*/
  constructor(compression?: number);
/**
* @param {Memory} input
*/
  write(input: Memory): void;
/**
*/
  flush(): void;
/**
* @returns {Memory}
*/
  read(): Memory;
/**
* @returns {Memory}
*/
  finish(): Memory;
}
/**
*/
export class Memory {
  [Symbol.dispose](): void
  free(): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;

  /**
   * Free on next tick
   **/
  freeNextTick(): Memory

  /**
   * Get the bytes in memory
   **/
  get bytes(): Uint8Array

  /**
   * Copy the bytes and free them
   **/
  copyAndDispose(): Uint8Array
}
/**
*/
export class ZlibDecoder {
  [Symbol.dispose](): void
  free(): void;
/**
*/
  constructor();
/**
* @param {Memory} input
*/
  write(input: Memory): void;
/**
*/
  flush(): void;
/**
* @returns {Memory}
*/
  read(): Memory;
/**
* @returns {Memory}
*/
  finish(): Memory;
}
/**
*/
export class ZlibEncoder {
  [Symbol.dispose](): void
  free(): void;
/**
* @param {number | undefined} compression
*/
  constructor(compression?: number);
/**
* @param {Memory} input
*/
  write(input: Memory): void;
/**
*/
  flush(): void;
/**
* @returns {Memory}
*/
  read(): Memory;
/**
* @returns {Memory}
*/
  finish(): Memory;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly gunzip: (a: number, b: number) => void;
  readonly __wbg_gzdecoder_free: (a: number) => void;
  readonly gzdecoder_new: () => number;
  readonly gzdecoder_write: (a: number, b: number, c: number) => void;
  readonly gzdecoder_flush: (a: number, b: number) => void;
  readonly gzdecoder_finish: (a: number, b: number) => void;
  readonly __wbg_memory_free: (a: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly deflate: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_deflateencoder_free: (a: number) => void;
  readonly deflateencoder_new: (a: number, b: number) => number;
  readonly deflateencoder_write: (a: number, b: number, c: number) => void;
  readonly deflateencoder_flush: (a: number, b: number) => void;
  readonly deflateencoder_finish: (a: number, b: number) => void;
  readonly zlib: (a: number, b: number, c: number, d: number) => void;
  readonly zlibencoder_new: (a: number, b: number) => number;
  readonly gzip: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_gzencoder_free: (a: number) => void;
  readonly gzencoder_new: (a: number, b: number) => number;
  readonly gzencoder_write: (a: number, b: number, c: number) => void;
  readonly gzencoder_flush: (a: number, b: number) => void;
  readonly gzencoder_read: (a: number) => number;
  readonly gzencoder_finish: (a: number, b: number) => void;
  readonly inflate: (a: number, b: number) => void;
  readonly __wbg_deflatedecoder_free: (a: number) => void;
  readonly deflatedecoder_new: () => number;
  readonly deflatedecoder_write: (a: number, b: number, c: number) => void;
  readonly deflatedecoder_flush: (a: number, b: number) => void;
  readonly deflatedecoder_read: (a: number) => number;
  readonly deflatedecoder_finish: (a: number, b: number) => void;
  readonly unzlib: (a: number, b: number) => void;
  readonly zlibdecoder_new: () => number;
  readonly zlibencoder_flush: (a: number, b: number) => void;
  readonly zlibdecoder_flush: (a: number, b: number) => void;
  readonly gzdecoder_read: (a: number) => number;
  readonly zlibencoder_read: (a: number) => number;
  readonly deflateencoder_read: (a: number) => number;
  readonly zlibdecoder_read: (a: number) => number;
  readonly __wbg_zlibdecoder_free: (a: number) => void;
  readonly zlibencoder_write: (a: number, b: number, c: number) => void;
  readonly zlibdecoder_write: (a: number, b: number, c: number) => void;
  readonly zlibencoder_finish: (a: number, b: number) => void;
  readonly zlibdecoder_finish: (a: number, b: number) => void;
  readonly __wbg_zlibencoder_free: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
