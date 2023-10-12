import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/foras_bg.wasm")

writeFileSync(`./wasm/pkg/foras.wasm.js`, `export const data = "data:application/wasm;base64,${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/foras.wasm.d.ts`, `export const data: string;`);

const disposableJs = `  [Symbol.dispose]() {
        this.free()
    }

    free() {`

const disposableTs = `  [Symbol.dispose](): void
  free(): void;`

const beforeMemoryJs = `export class Memory {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Memory.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_memory_free(ptr);
    }
    /**
    * @param {Uint8Array} inner
    */
    constructor(inner) {
        const ptr0 = passArray8ToWasm0(inner, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.memory_new(ptr0, len0);
        return Memory.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    ptr() {
        const ret = wasm.memory_ptr(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    len() {
        const ret = wasm.memory_len(this.__wbg_ptr);
        return ret >>> 0;
    }
}`

const afterMemoryJs = `export class Memory {

    static __wrap(ptr, ptr0, len0) {
        ptr = ptr >>> 0;
        const obj = Object.create(Memory.prototype);
        obj.__wbg_ptr = ptr;
        obj.__wbg_ptr0 = ptr0;
        obj.__wbg_len0 = len0;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    [Symbol.dispose]() {
        this.free()
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_memory_free(ptr);
    }
    /**
    * @param {Uint8Array} inner
    */
    constructor(inner) {
        const ptr0 = passArray8ToWasm0(inner, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.memory_new(ptr0, len0);
        return Memory.__wrap(ret, ptr0, len0);
    }
    /**
    * @returns {number}
    */
    ptr() {
        return this.__wbg_ptr0 ??= wasm.memory_ptr(this.__wbg_ptr);
    }
    /**
    * @returns {number}
    */
    len() {
        return this.__wbg_len0 ??= wasm.memory_len(this.__wbg_ptr);
    }

    freeNextTick() {
        setTimeout(() => this.free(), 0);
        return this;
    }

    get bytes() {
        return getUint8Memory0().subarray(this.ptr(), this.ptr() + this.len());
    }
    
    copyAndDispose() {
        const bytes = this.bytes.slice();
        this.free();
        return bytes;
    }
}`

const beforeMemoryTs = `export class Memory {
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
}`

const afterMemoryTs = `export class Memory {
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
}`

const glueJs = readFileSync(`./wasm/pkg/foras.js`, "utf8")
  .replace("async function __wbg_init", "export async function __wbg_init")
  .replace("input = new URL('foras_bg.wasm', import.meta.url);", "throw new Error();")
  .replaceAll("  free() {", disposableJs)
  .replaceAll(beforeMemoryJs, afterMemoryJs)

const glueTs = readFileSync(`./wasm/pkg/foras.d.ts`, "utf8")
  .replace("export default function __wbg_init", "export function __wbg_init")
  .replaceAll("  free(): void;", disposableTs)
  .replaceAll(beforeMemoryTs, afterMemoryTs)

writeFileSync(`./wasm/pkg/foras.js`, glueJs)
writeFileSync(`./wasm/pkg/foras.d.ts`, glueTs)

rmSync(`./wasm/pkg/.gitignore`, { force: true });