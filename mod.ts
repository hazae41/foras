export * from "./pkg/deflate.js";

// @deno-types=./pkg/deflate.d.ts
import init from "./pkg/deflate.js";

async function read(path: string) {
  const url = new URL(path, import.meta.url);

  if (url.protocol === "file:") {
    return await Deno.readFile(url);
  }

  const response = await fetch(url);
  return await response.arrayBuffer();
}

await init(read("./pkg/deflate_bg.wasm"));
