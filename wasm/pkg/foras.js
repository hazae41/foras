let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @param {Memory} input
* @returns {Memory}
*/
export function gunzip(input) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(input, Memory);
        wasm.gunzip(retptr, input.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return Memory.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}
/**
* @param {Memory} input
* @param {number | undefined} compression
* @returns {Memory}
*/
export function deflate(input, compression) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(input, Memory);
        wasm.deflate(retptr, input.__wbg_ptr, !isLikeNone(compression), isLikeNone(compression) ? 0 : compression);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return Memory.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Memory} input
* @param {number | undefined} compression
* @returns {Memory}
*/
export function zlib(input, compression) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(input, Memory);
        wasm.zlib(retptr, input.__wbg_ptr, !isLikeNone(compression), isLikeNone(compression) ? 0 : compression);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return Memory.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Memory} input
* @param {number | undefined} compression
* @returns {Memory}
*/
export function gzip(input, compression) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(input, Memory);
        wasm.gzip(retptr, input.__wbg_ptr, !isLikeNone(compression), isLikeNone(compression) ? 0 : compression);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return Memory.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Memory} input
* @returns {Memory}
*/
export function inflate(input) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(input, Memory);
        wasm.inflate(retptr, input.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return Memory.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Memory} input
* @returns {Memory}
*/
export function unzlib(input) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        _assertClass(input, Memory);
        wasm.unzlib(retptr, input.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return Memory.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*/
export class DeflateDecoder {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DeflateDecoder.prototype);
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
        wasm.__wbg_deflatedecoder_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.deflatedecoder_new();
        return DeflateDecoder.__wrap(ret);
    }
    /**
    * @param {Memory} input
    */
    write(input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(input, Memory);
            wasm.deflatedecoder_write(retptr, this.__wbg_ptr, input.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    */
    flush() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflatedecoder_flush(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Memory}
    */
    read() {
        const ret = wasm.deflatedecoder_read(this.__wbg_ptr);
        return Memory.__wrap(ret);
    }
    /**
    * @returns {Memory}
    */
    finish() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflatedecoder_finish(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Memory.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class DeflateEncoder {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DeflateEncoder.prototype);
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
        wasm.__wbg_deflateencoder_free(ptr);
    }
    /**
    * @param {number | undefined} compression
    */
    constructor(compression) {
        const ret = wasm.deflateencoder_new(!isLikeNone(compression), isLikeNone(compression) ? 0 : compression);
        return DeflateEncoder.__wrap(ret);
    }
    /**
    * @param {Memory} input
    */
    write(input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(input, Memory);
            wasm.deflateencoder_write(retptr, this.__wbg_ptr, input.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    */
    flush() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflateencoder_flush(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Memory}
    */
    read() {
        const ret = wasm.deflatedecoder_read(this.__wbg_ptr);
        return Memory.__wrap(ret);
    }
    /**
    * @returns {Memory}
    */
    finish() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflateencoder_finish(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Memory.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class GzDecoder {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(GzDecoder.prototype);
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
        wasm.__wbg_gzdecoder_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.gzdecoder_new();
        return GzDecoder.__wrap(ret);
    }
    /**
    * @param {Memory} input
    */
    write(input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(input, Memory);
            wasm.gzdecoder_write(retptr, this.__wbg_ptr, input.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    */
    flush() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.gzdecoder_flush(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Memory}
    */
    read() {
        const ret = wasm.deflatedecoder_read(this.__wbg_ptr);
        return Memory.__wrap(ret);
    }
    /**
    * @returns {Memory}
    */
    finish() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.gzdecoder_finish(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Memory.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class GzEncoder {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(GzEncoder.prototype);
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
        wasm.__wbg_gzencoder_free(ptr);
    }
    /**
    * @param {number | undefined} compression
    */
    constructor(compression) {
        const ret = wasm.gzencoder_new(!isLikeNone(compression), isLikeNone(compression) ? 0 : compression);
        return GzEncoder.__wrap(ret);
    }
    /**
    * @param {Memory} input
    */
    write(input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(input, Memory);
            wasm.gzencoder_write(retptr, this.__wbg_ptr, input.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    */
    flush() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.gzencoder_flush(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Memory}
    */
    read() {
        const ret = wasm.gzencoder_read(this.__wbg_ptr);
        return Memory.__wrap(ret);
    }
    /**
    * @returns {Memory}
    */
    finish() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.gzencoder_finish(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Memory.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Memory {

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
}
/**
*/
export class ZlibDecoder {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ZlibDecoder.prototype);
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
        wasm.__wbg_zlibdecoder_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.zlibdecoder_new();
        return ZlibDecoder.__wrap(ret);
    }
    /**
    * @param {Memory} input
    */
    write(input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(input, Memory);
            wasm.deflatedecoder_write(retptr, this.__wbg_ptr, input.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    */
    flush() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflatedecoder_flush(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Memory}
    */
    read() {
        const ret = wasm.deflatedecoder_read(this.__wbg_ptr);
        return Memory.__wrap(ret);
    }
    /**
    * @returns {Memory}
    */
    finish() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflatedecoder_finish(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Memory.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class ZlibEncoder {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ZlibEncoder.prototype);
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
        wasm.__wbg_zlibencoder_free(ptr);
    }
    /**
    * @param {number | undefined} compression
    */
    constructor(compression) {
        const ret = wasm.zlibencoder_new(!isLikeNone(compression), isLikeNone(compression) ? 0 : compression);
        return ZlibEncoder.__wrap(ret);
    }
    /**
    * @param {Memory} input
    */
    write(input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(input, Memory);
            wasm.deflateencoder_write(retptr, this.__wbg_ptr, input.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    */
    flush() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflateencoder_flush(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Memory}
    */
    read() {
        const ret = wasm.deflatedecoder_read(this.__wbg_ptr);
        return Memory.__wrap(ret);
    }
    /**
    * @returns {Memory}
    */
    finish() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.deflateencoder_finish(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Memory.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

export async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        throw new Error();
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;
