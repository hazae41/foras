import { deflate, Foras, gunzip, gzip, inflate, unzlib, zlib } from "../../deno/mod.ts";

await Foras.initBundledOnce()

const bytes = new TextEncoder().encode("Hello world")
console.log("Bytes", bytes)

{
  console.log("--- Deflate ---")

  const compressed = deflate(bytes)
  console.log("Compressed", compressed)

  const decompressed = inflate(compressed)
  console.log("Decompressed", decompressed)
}

{
  console.log("--- Gzip ---")

  const compressed = gzip(bytes)
  console.log("Compressed", compressed)

  const decompressed = gunzip(compressed)
  console.log("Decompressed", decompressed)
}

{
  console.log("--- Zlib ---")

  const compressed = zlib(bytes)
  console.log("Compressed", compressed)

  const decompressed = unzlib(compressed)
  console.log("Decompressed", decompressed)
}