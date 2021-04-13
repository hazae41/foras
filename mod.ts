export {
  deflate,
  inflate,
  gzip,
  gunzip,
  zlib,
  unzlib,
} from "./pkg/denoflate.js";

import wasm from "./pkg/denoflate.js";

export let initialized = false;

async function read(path: string) {
  const url = new URL(path, import.meta.url);

  if (url.protocol === "file:")
    return await Deno.readFile(url);

  const res = await fetch(url)
  return await res.arrayBuffer();
}

export async function init() {
  if (initialized) return;
  await wasm(read("./pkg/denoflate_bg.wasm"));
  initialized = true;
}
