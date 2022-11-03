# Deflate, Gzip, and Zlib for WebAssembly

WebAssembly port of Rust's flate2, a Rust implementation of Deflate, Gzip, and Zlib compressions.

```bash
npm i @hazae41/foras
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/foras) • [**Deno Module 🦖**](https://deno.land/x/foras) • [**Next.js CodeSandbox 🪣**](https://codesandbox.io/p/github/hazae41/foras-example-next)

### Usage

```ts
import { Foras, deflate, inflate } from "@hazae41/foras";
// or { Foras, gzip, gunzip }
// or { Foras, zlib, unzlib }

// Wait for WASM to load
Foras.initSyncBundledOnce()

const bytes = new TextEncoder().encode("Hello world")

const compressed = deflate(bytes)
const decompressed = inflate(compressed)
```

### Unreproducible building

You need to install [Rust](https://www.rust-lang.org/tools/install)

Then, install [wasm-pack](https://github.com/rustwasm/wasm-pack)

```bash
cargo install wasm-pack
```

Finally, do a clean install and build

```bash
npm ci && npm run build
```

### Reproducible building

You can build the exact same bytecode using Docker, just be sure you're on a `linux/amd64` host

```bash
docker compose up --build
```

Then check that all the files are the same using `git status`

```bash
git status --porcelain
```

If the output is empty then the bytecode is the same as the one I commited

### Automated checks

Each time I commit to the repository, the GitHub's CI does the following:
- Clone the repository
- Reproduce the build using `docker compose up --build`
- Throw an error if the `git status --porcelain` output is not empty

Each time I release a new version tag on GitHub, the GitHub's CI does the following:
- Clone the repository
- Do not reproduce the build, as it's already checked by the task above
- Throw an error if there is a `npm diff` between the cloned repository and the same version tag on NPM

If a version is present on NPM but not on GitHub, do not use!