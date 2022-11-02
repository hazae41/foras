import { readFile, rm, writeFile } from "fs/promises";

const wasm = await readFile("./wasm/pkg/foras_bg.wasm");

await writeFile(
  `./wasm/pkg/foras.wasm.js`,
  `export const wasm = "${wasm.toString("base64")}";`
);

await writeFile(
  `./wasm/pkg/foras.wasm.d.ts`,
  `export const wasm: string;`
);

await rm(`./wasm/pkg/.gitignore`);