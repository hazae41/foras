export * from "../../wasm/pkg/foras.js";

import init, { InitOutput, initSync } from "../../wasm/pkg/foras.js";
import { wasm } from "../../wasm/pkg/foras.wasm.js";

let output: InitOutput | undefined = undefined

export function initSyncBundledOnce() {
  return output ??= initSync(Buffer.from(wasm, "base64"))
}

export async function initBundledOnce() {
  return output ??= (init as any)(Buffer.from(wasm, "base64"))
}