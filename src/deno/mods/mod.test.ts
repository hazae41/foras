import { Buffer } from "https://deno.land/std@0.170.0/node/buffer.ts";
import { assert, test } from "npm:@hazae41/phobos";
import { DeflateDecoder, DeflateEncoder, GzDecoder, GzEncoder, Memory, ZlibDecoder, ZlibEncoder, deflate, gunzip, gzip, inflate, initBundledOnce, unzlib, zlib } from "./mod.ts";

type Coder =
  (buffer: Memory, compression?: number) => Memory

interface StreamCoder {
  write(x: Memory): void
  flush(): void
  read(): Memory
  finish(): Memory
}

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)

  return ba.equals(bb)
}

function compressStream(compresser: StreamCoder, decompressed: Uint8Array) {
  const compressed = new Uint8Array(decompressed.length)

  let roffset = 0
  let woffset = 0

  while (roffset < decompressed.length) {
    const end = Math.min(roffset + 1000, decompressed.length)
    compresser.write(new Memory(decompressed.subarray(roffset, end)))
    compresser.flush()
    roffset = end

    const block = compresser.read().copyAndDispose()
    compressed.set(block, woffset)
    woffset += block.length
  }

  const finish = compresser.finish().copyAndDispose()
  compressed.set(finish, woffset)
  woffset += finish.length

  return compressed.subarray(0, woffset)
}

function decompressStream(decompresser: StreamCoder, compressed: Uint8Array, original: Uint8Array) {
  const decompressed = new Uint8Array(original.length)

  let roffset = 0
  let woffset = 0

  while (roffset < compressed.length) {
    const end = Math.min(roffset + 1000, compressed.length)
    decompresser.write(new Memory(compressed.subarray(roffset, end)))
    decompresser.flush()
    roffset = end

    const block = decompresser.read().copyAndDispose()
    decompressed.set(block, woffset)
    woffset += block.length
  }

  const finish = decompresser.finish().copyAndDispose()
  decompressed.set(finish, woffset)
  woffset += finish.length

  return decompressed.subarray(0, woffset)
}

function assertCompressStream(compresser: StreamCoder, decompresser: Coder) {
  const original = Deno.readFileSync("./test/lorem.txt")

  const compressed = compressStream(compresser, original)
  const decompressed = decompresser(new Memory(compressed)).copyAndDispose()

  assert(equals(decompressed, original), `decompress(compress_stream(input)) should be equals to input`)
}

function assertDecompressStream(compresser: Coder, decompresser: StreamCoder) {
  const original = Deno.readFileSync("./test/lorem.txt")

  const compressed = compresser(new Memory(original)).copyAndDispose()
  const decompressed = decompressStream(decompresser, compressed, original)

  assert(equals(decompressed, original), `decompress_stream(compress(input)) should be equals to input`)
}

test("Deflate", async () => {
  await initBundledOnce()

  assertCompressStream(new DeflateEncoder(undefined), inflate)
  assertDecompressStream(deflate, new DeflateDecoder())
})

test("Gzip", async () => {
  await initBundledOnce()

  assertCompressStream(new GzEncoder(undefined), gunzip)
  assertDecompressStream(gzip, new GzDecoder())
})

test("Zlib", async () => {
  await initBundledOnce()

  assertCompressStream(new ZlibEncoder(undefined), unzlib)
  assertDecompressStream(zlib, new ZlibDecoder())
})