use wasm_bindgen::prelude::*;

use flate2::read::DeflateDecoder;
use flate2::write::DeflateEncoder;

use flate2::Compression;

use std::io::{Read, Write};

#[wasm_bindgen]
pub fn inflate(input: &[u8]) -> Vec<u8> {
    let mut d = DeflateDecoder::new(&input[..]);
    let mut buffer = Vec::new();
    d.read_to_end(&mut buffer).unwrap();
    return buffer;
}

#[wasm_bindgen]
pub fn deflate(input: &[u8]) -> Vec<u8> {
    let mut e = DeflateEncoder::new(Vec::new(), Compression::default());
    e.write_all(input).unwrap();
    let compressed_bytes = e.finish();
    return compressed_bytes.unwrap();
}
