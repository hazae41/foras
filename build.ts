const wasm = await Deno.readFile("./pkg/denoflate_bg.wasm");

await Deno.writeTextFile("./pkg/denoflate_bg.wasm.js", 
  `export const wasm = new Uint8Array([${wasm.join(",")}]);`);