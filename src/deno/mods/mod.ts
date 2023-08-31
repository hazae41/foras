export * from "../../../wasm/pkg/foras.js";

// @deno-types="../../../wasm/pkg/foras.d.ts"
import { __wbg_init, InitOutput } from "../../../wasm/pkg/foras.js";
import { data } from "../../../wasm/pkg/foras.wasm.js";

let output: InitOutput | undefined = undefined

export async function initBundledOnce() {
  return output ??= await __wbg_init(data)
}