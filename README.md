# Denoflate

WebAssembly powered Deflate compression for Deno, written in Rust.

## Usage

```typescript
import { deflate, inflate } from "https://raw.githubusercontent.com/hazae41/denoflate/mod.ts";

const bytes = new Uint8Array([1, 2, 3]);
const compressed = deflate(bytes);
const decompressed = inflate(compressed);
```

## Building

- Install wasm-pack

      cargo install wasm-pack

- Build

      wasm-pack build --target web --release

- Remove `init` and `load` from `pkg/deflate.js`

- Replace `let wasm;` by `let wasm = await Wasm("deflate_bg.wasm");`