import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import externals from "rollup-plugin-node-externals";
import typescript from "ttypescript";

export const config = [
  {
    input: "./src/node/index.ts",
    output: [{
      dir: "./dist/cjs",
      format: "cjs",
      exports: "named",
      preserveModules: true,
      sourcemap: true,
      entryFileNames: "[name].cjs",
    }],
    plugins: [resolve(), externals(), ts({ typescript }), commonjs()]
  },
  {
    input: "./src/node/index.ts",
    output: [{
      dir: "./dist/types",
      format: "esm",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].d.ts",
    }],
    plugins: [dts(), resolve(), externals(), ts({ typescript })]
  },
  {
    input: "./src/node/index.test.ts",
    output: [{
      dir: "./dist/test",
      format: "cjs",
      exports: "named",
      preserveModules: true,
      sourcemap: true,
      entryFileNames: "[name].cjs",
    }],
    plugins: [resolve(), externals(), ts({ typescript }), commonjs()]
  }
]

export default config