use wasm_bindgen::prelude::*;

use flate2::write::DeflateDecoder;
use flate2::write::DeflateEncoder;
use flate2::Compression;

use std::io::Write;

#[wasm_bindgen]
pub fn inflate(input: &[u8]) -> Result<Vec<u8>, JsValue> {
    let mut decoder = DeflateDecoder::new(Vec::new());

    decoder
        .write_all(input)
        .and_then(|_| decoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}

#[wasm_bindgen]
pub fn deflate(input: &[u8]) -> Result<Vec<u8>, JsValue> {
    let mut encoder = DeflateEncoder::new(Vec::new(), Compression::default());

    encoder
        .write_all(input)
        .and_then(|_| encoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}
