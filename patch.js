import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/foras_bg.wasm")

writeFileSync(`./wasm/pkg/foras.wasm.js`, `export const data = "data:application/wasm;base64,${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/foras.wasm.d.ts`, `export const data: string;`);

const disposableJs = `
  [Symbol.dispose]() {
    this.free()
  }
`

const disposableTs = `
  [Symbol.dispose](): void
`

const glueJs = readFileSync(`./wasm/pkg/foras.js`, "utf8")
  .replace("async function __wbg_init", "export async function __wbg_init")
  .replace("input = new URL('foras_bg.wasm', import.meta.url);", "throw new Error();")
  .replaceAll("getArrayU8FromWasm0(r0, r1).slice()", "new Slice(r0, r1)")
  .replaceAll("wasm.__wbindgen_free(r0, r1 * 1)", "")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")
  .replaceAll("  free() {", disposableJs + "\n" + "  free() {")

const glueTs = readFileSync(`./wasm/pkg/foras.d.ts`, "utf8")
  .replace("export default function __wbg_init", "export function __wbg_init")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")
  .replaceAll(": Uint8Array;", ": Slice;")
  .replaceAll("  free(): void;", disposableTs + "\n" + "  free(): void;")

const preJs = `
import { Ok } from "@hazae41/result"
`

const postJs = `
export class Slice {

  /**
   * @param {number} ptr 
   * @param {number} len 
   **/
  constructor(ptr, len) {
    this.ptr = ptr
    this.len = len
    this.start = (ptr >>> 0) / 1
    this.end = this.start + len
  }

  /**
   * @returns {void}
   **/
  [Symbol.dispose]() {
    this.free()
  }

  /**
   * @returns {Uint8Array}
   **/
  get bytes() {
    return getUint8Memory0().subarray(this.start, this.end)
  }

  /**
   * @returns {void}
   **/
  free() {
    wasm.__wbindgen_free(this.ptr, this.len * 1);
  }

  /**
   * @returns {Uint8Array}
   **/
  copyAndDispose() {
    const bytes = this.bytes.slice()
    this.free()
    return bytes
  }

  /**
   * @returns {Result<number,never>}
   */
  trySize() {
    return new Ok(this.len)
  }

  /**
   * @param {Cursor} cursor 
   * @returns {Result<void, CursorWriteError>}
   */
  tryWrite(cursor) {
    return cursor.tryWrite(this.bytes)
  }

}`

const preTs = `
import type { Result } from "@hazae41/result"
import type { Cursor, CursorWriteError } from "@hazae41/cursor"
`

const postTs = `
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
  copyAndDispose(): Uint8Array

  trySize(): Result<number, never>

  tryWrite(cursor: Cursor): Result<void, CursorWriteError>

}`

writeFileSync(`./wasm/pkg/foras.js`, preJs + "\n" + glueJs + "\n" + postJs)
writeFileSync(`./wasm/pkg/foras.d.ts`, preTs + "\n" + glueTs + "\n" + postTs)

rmSync(`./wasm/pkg/.gitignore`, { force: true });