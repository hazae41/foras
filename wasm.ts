export async function Wasm(path: string) {
  const url = new URL(`./pkg/${path}`, import.meta.url);
  const code = await read(url);
  const module = new WebAssembly.Module(code);
  const instance = new WebAssembly.Instance(module);
  return instance.exports;
}

async function read(url: URL) {
  if (url.protocol === "file:") {
    return await Deno.readFile(url);
  }

  const response = await fetch(url);
  return await response.arrayBuffer();
}
