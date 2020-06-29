# Denoflate

WebAssembly powered Deflate/Gzip/Zlib compression for Deno, written in Rust.

## Usage

    deno cache -r https://deno.land/x/denoflate/mod.ts

```typescript
import { deflate, inflate } from "https://deno.land/x/denoflate/mod.ts";
// or { gzip, gunzip }
// or { zlib, unzlib }

const bytes = new Uint8Array([1, 2, 3]);
const compressed = deflate(bytes, undefined);
const decompressed = inflate(compressed);
```

## Test

    deno cache -r https://deno.land/x/denoflate/test.ts
    deno run --allow-net https://deno.land/x/denoflate/test.ts

## Building

- Install wasm-pack
  
      cargo install wasm-pack

- Build

      wasm-pack build --target web --release