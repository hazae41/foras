
import type { Result } from "@hazae41/result"
import type { Cursor, CursorWriteError } from "@hazae41/cursor"

/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Slice}
*/
export function deflate(input: Uint8Array, compression?: number): Slice;
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Slice}
*/
export function zlib(input: Uint8Array, compression?: number): Slice;
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Slice}
*/
export function gzip(input: Uint8Array, compression?: number): Slice;
/**
* @param {Uint8Array} input
* @returns {Slice}
*/
export function inflate(input: Uint8Array): Slice;
/**
* @param {Uint8Array} input
* @returns {Slice}
*/
export function unzlib(input: Uint8Array): Slice;
/**
* @param {Uint8Array} input
* @returns {Slice}
*/
export function gunzip(input: Uint8Array): Slice;
/**
*/
export class DeflateDecoder {

  [Symbol.dispose](): void

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
* @returns {Slice}
*/
  read(): Slice;
/**
* @returns {Slice}
*/
  finish(): Slice;
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
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Slice}
*/
  read(): Slice;
/**
* @returns {Slice}
*/
  finish(): Slice;
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
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Slice}
*/
  read(): Slice;
/**
* @returns {Slice}
*/
  finish(): Slice;
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
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Slice}
*/
  read(): Slice;
/**
* @returns {Slice}
*/
  finish(): Slice;
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
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Slice}
*/
  read(): Slice;
/**
* @returns {Slice}
*/
  finish(): Slice;
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
* @param {Uint8Array} input
*/
  write(input: Uint8Array): void;
/**
*/
  flush(): void;
/**
* @returns {Slice}
*/
  read(): Slice;
/**
* @returns {Slice}
*/
  finish(): Slice;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly deflate: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_deflateencoder_free: (a: number) => void;
  readonly deflateencoder_new: (a: number, b: number) => number;
  readonly deflateencoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly deflateencoder_flush: (a: number, b: number) => void;
  readonly deflateencoder_finish: (a: number, b: number) => void;
  readonly zlib: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly zlibencoder_new: (a: number, b: number) => number;
  readonly zlibencoder_finish: (a: number, b: number) => void;
  readonly gzip: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_gzencoder_free: (a: number) => void;
  readonly gzencoder_new: (a: number, b: number) => number;
  readonly gzencoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly gzencoder_flush: (a: number, b: number) => void;
  readonly gzencoder_read: (a: number, b: number) => void;
  readonly gzencoder_finish: (a: number, b: number) => void;
  readonly inflate: (a: number, b: number, c: number) => void;
  readonly __wbg_deflatedecoder_free: (a: number) => void;
  readonly deflatedecoder_new: () => number;
  readonly deflatedecoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly deflatedecoder_flush: (a: number, b: number) => void;
  readonly deflatedecoder_read: (a: number, b: number) => void;
  readonly deflatedecoder_finish: (a: number, b: number) => void;
  readonly unzlib: (a: number, b: number, c: number) => void;
  readonly zlibdecoder_new: () => number;
  readonly gunzip: (a: number, b: number, c: number) => void;
  readonly __wbg_gzdecoder_free: (a: number) => void;
  readonly gzdecoder_new: () => number;
  readonly gzdecoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly gzdecoder_flush: (a: number, b: number) => void;
  readonly gzdecoder_finish: (a: number, b: number) => void;
  readonly zlibencoder_read: (a: number, b: number) => void;
  readonly deflateencoder_read: (a: number, b: number) => void;
  readonly zlibdecoder_read: (a: number, b: number) => void;
  readonly gzdecoder_read: (a: number, b: number) => void;
  readonly zlibencoder_flush: (a: number, b: number) => void;
  readonly zlibdecoder_flush: (a: number, b: number) => void;
  readonly __wbg_zlibdecoder_free: (a: number) => void;
  readonly zlibencoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly zlibdecoder_write: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_zlibencoder_free: (a: number) => void;
  readonly zlibdecoder_finish: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
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


export class Slice {

  readonly ptr: number

  readonly len: number

  constructor(ptr: number, len: number);

  /**
   * Free the bytes
   **/
  [Symbol.dispose](): void

  /**
   * Get the bytes in memory
   **/
  get bytes(): Uint8Array

  /**
   * Free the bytes
   **/
  free(): void

  /**
   * Copy the bytes and free them
   **/
  copy(): Uint8Array

  trySize(): Result<number, never>

  tryWrite(cursor: Cursor): Result<void, CursorWriteError>

}