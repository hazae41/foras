import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/foras_bg.wasm")

writeFileSync(`./wasm/pkg/foras.wasm.js`, `export const data = "data:application/wasm;base64,${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/foras.wasm.d.ts`, `export const data: string;`);

const disposableJs = `
    get freed() {
        return this.__wbg_freed
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        if (this.__wbg_freed)
            return
        this.__wbg_freed = true
`

const disposableTs = `
  get freed(): boolean

  [Symbol.dispose](): void
`

const originalPassJs = `function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}`

const zeroCopyPassJs = `function passArray8ToWasm0(arg, malloc) {
    if (getUint8Memory0().buffer === arg.inner.bytes.buffer) {
      const bytes = arg.unwrap().bytes
      WASM_VECTOR_LEN = bytes.byteLength;
      return bytes.byteOffset
    }

    const bytes = arg.get().bytes
    const ptr = malloc(bytes.length * 1, 1) >>> 0;
    getUint8Memory0().set(bytes, ptr / 1);
    WASM_VECTOR_LEN = bytes.length;
    return ptr;
}`

const glueJs = readFileSync(`./wasm/pkg/foras.js`, "utf8")
  .replace("async function __wbg_init", "export async function __wbg_init")
  .replace("input = new URL('foras_bg.wasm', import.meta.url);", "throw new Error();")
  .replaceAll("getArrayU8FromWasm0(r0, r1).slice()", "new Slice(r0, r1)")
  .replaceAll("wasm.__wbindgen_free(r0, r1 * 1)", "")
  .replaceAll("@param {Uint8Array}", "@param {Box<Copiable>}")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")
  .replaceAll("obj.__wbg_ptr = ptr;", "obj.__wbg_ptr = ptr;" + "\n" + "        obj.__wbg_freed = false;")
  .replaceAll("  free() {", disposableJs)
  .replaceAll(originalPassJs, zeroCopyPassJs)

const glueTs = readFileSync(`./wasm/pkg/foras.d.ts`, "utf8")
  .replace("export default function __wbg_init", "export function __wbg_init")
  .replaceAll("@returns {Uint8Array}", "@returns {Slice}")
  .replaceAll(": Uint8Array;", ": Slice;")
  .replaceAll(": Uint8Array", ": Box<Copiable>")
  .replaceAll("  free(): void;", disposableTs + "\n" + "  free(): void;")

const preJs = `
import { Copied } from "@hazae41/box"
`

const postJs = `
export class Slice {

  #freed = false

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

  get freed() {
    return this.#freed
  }

  /**
   * @returns {void}
   **/
  free() {
    if (this.#freed)
      return
    this.#freed = true
    wasm.__wbindgen_free(this.ptr, this.len * 1);
  }

  /**
   * @returns {Copied}
   **/
  copyAndDispose() {
    const bytes = this.bytes.slice()
    this.free()
    return new Copied(bytes)
  }

}`

const preTs = `
import type { Box, Copiable, Copied } from "@hazae41/box"
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
   * Is the memory freed?
   **/
  get freed(): boolean

  /**
   * Free the bytes (do nothing if already freed)
   **/
  free(): void

  /**
   * Copy the bytes and free them
   **/
  copyAndDispose(): Copied

}`

writeFileSync(`./wasm/pkg/foras.js`, preJs + "\n" + glueJs + "\n" + postJs)
writeFileSync(`./wasm/pkg/foras.d.ts`, preTs + "\n" + glueTs + "\n" + postTs)

rmSync(`./wasm/pkg/.gitignore`, { force: true });