import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import typescript from "ttypescript";

export const config = [
  {
    input: "./node/index.ts",
    output: [{
      dir: "./dist/cjs",
      format: "cjs",
      exports: "named",
      preserveModules: true,
      sourcemap: true,
      entryFileNames: "[name].cjs",
    }],
    plugins: [resolve(), ts({ typescript }), commonjs()],
    external: ["tslib"]
  },
  {
    input: "./node/index.ts",
    output: [{
      dir: "./dist/types",
      format: "esm",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].d.ts",
    }],
    plugins: [dts(), resolve(), ts({ typescript })],
    external: ["tslib"]
  }
]

export default config