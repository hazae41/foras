import { readFileSync, rmSync, writeFileSync } from "fs";

const wasm = readFileSync("./wasm/pkg/foras_bg.wasm");
writeFileSync(`./wasm/pkg/foras.wasm.js`, `export const wasm = "${wasm.toString("base64")}";`);
writeFileSync(`./wasm/pkg/foras.wasm.d.ts`, `export const wasm: string;`);

const script = readFileSync(`./wasm/pkg/foras.js`, "utf8")
  .replace("export { initSync }", "export { init, initSync }")
  .replace("input = new URL('foras_bg.wasm', import.meta.url);", "throw new Error();")

const typing = readFileSync(`./wasm/pkg/foras.d.ts`, "utf8")
  .replace("export default function init", "export function init")

writeFileSync(`./wasm/pkg/foras.js`, script)
writeFileSync(`./wasm/pkg/foras.d.ts`, typing)

rmSync(`./wasm/pkg/.gitignore`, { force: true });