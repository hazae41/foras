import { inflate, deflate } from "./mod.ts";

const bytes = new Uint8Array([1, 2, 3]);
console.log(bytes);

const compressed = deflate(bytes);
console.log(compressed);

const decompressed = inflate(compressed);
console.log(decompressed);
