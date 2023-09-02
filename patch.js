import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/foras_bg.wasm")

writeFileSync(`./wasm/pkg/foras.wasm.js`, `export const data = "data:application/wasm;base64,${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/foras.wasm.d.ts`, `export const data: string;`);

const disposableJs = `
  [Symbol.dispose]() {
    this.free()
  }

  dispose() {
    this.free()
  }
`

const disposableTs = `
  [Symbol.dispose](): void

  dispose(): void
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

const patchJs = `
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
  copy() {
    const bytes = this.bytes.slice()
    this.free()
    return bytes
  }

  /**
   * @returns {void}
   **/
  [Symbol.dispose]() {
    this.free()
  }

  /**
   * @returns {void}
   **/
  dispose() {
    this.free()
  }

}`

const patchTs = `
export class Slice {

  readonly ptr: number

  readonly len: number

  constructor(ptr: number, len: number);

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

  /**
   * Free the bytes
   **/
  [Symbol.dispose](): void

  /**
   * Free the bytes
   **/
  dispose(): void

}`

writeFileSync(`./wasm/pkg/foras.js`, glueJs + patchJs)
writeFileSync(`./wasm/pkg/foras.d.ts`, glueTs + patchTs)

rmSync(`./wasm/pkg/.gitignore`, { force: true });