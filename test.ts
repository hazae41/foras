import {
  inflate,
  deflate,
  gzip,
  gunzip,
  zlib,
  unzlib,
} from "./mod.ts";

const bytes = new Uint8Array([1, 2, 3]);
console.log(bytes);

function test_deflate() {
  const compressed = deflate(bytes, undefined);
  const decompressed = inflate(compressed);
  console.log(decompressed);
}

function test_gzip() {
  const compressed = gzip(bytes, undefined);
  const decompressed = gunzip(compressed);
  console.log(decompressed);
}

function test_zlib() {
  const compressed = zlib(bytes, undefined);
  const decompressed = unzlib(compressed);
  console.log(decompressed);
}

test_deflate();
test_gzip();
test_zlib();
