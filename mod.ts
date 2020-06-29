// @deno-types=./pkg/denoflate.d.ts
export * from "./pkg/denoflate.js";

// @deno-types=./pkg/denoflate.d.ts
import init from "./pkg/denoflate.js";

async function read(path: string) {
  const url = new URL(path, import.meta.url);

  if (url.protocol === "file:") {
    return await Deno.readFile(url);
  }

  const response = await fetch(url);
  return await response.arrayBuffer();
}

await init(read("./pkg/denoflate_bg.wasm"));
