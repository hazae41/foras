export async function Wasm(path: string) {
  const url = new URL(`./pkg/${path}`, import.meta.url);
  const code = await Deno.readFile(url);
  const module = new WebAssembly.Module(code);
  const instance = new WebAssembly.Instance(module);
  return instance.exports;
}
