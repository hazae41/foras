const wasm = Deno.readFileSync("./pkg/denoflate_bg.wasm");
Deno.writeTextFileSync("./pkg/denoflate_bg.wasm.js", `export const wasm = new Uint8Array([${wasm.join(",")}]);`);