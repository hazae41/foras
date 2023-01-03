export * from "../../../wasm/pkg/foras.js";

import * as Base64 from "https://deno.land/std@0.158.0/encoding/base64.ts";

import { InitOutput } from "../../../wasm/pkg/foras.d.ts";
import init, { initSync } from "../../../wasm/pkg/foras.js";
import { wasm } from "../../../wasm/pkg/foras.wasm.js";

let output: InitOutput | undefined = undefined

export function initSyncBundledOnce() {
  return output ??= initSync(Base64.decode(wasm))
}

export async function initBundledOnce() {
  return output ??= await init(Base64.decode(wasm))
}