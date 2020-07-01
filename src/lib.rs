use wasm_bindgen::prelude::*;

use flate2::write::DeflateDecoder;
use flate2::write::DeflateEncoder;

use flate2::write::GzDecoder;
use flate2::write::GzEncoder;

use flate2::write::ZlibDecoder;
use flate2::write::ZlibEncoder;

use flate2::Compression;

use std::io::Write;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn deflate(input: &[u8], compression: Option<u32>) -> Result<Vec<u8>, JsValue> {
    let _compression = compression
        .map(|x| Compression::new(x))
        .unwrap_or(Compression::default());

    let mut encoder = DeflateEncoder::new(Vec::new(), _compression);

    encoder
        .write_all(input)
        .and_then(|_| encoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}

#[wasm_bindgen]
pub fn inflate(input: &[u8]) -> Result<Vec<u8>, JsValue> {
    let mut decoder = DeflateDecoder::new(Vec::new());

    decoder
        .write_all(input)
        .and_then(|_| decoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}

#[wasm_bindgen]
pub fn gzip(input: &[u8], compression: Option<u32>) -> Result<Vec<u8>, JsValue> {
    let _compression = compression
        .map(|x| Compression::new(x))
        .unwrap_or(Compression::default());

    let mut encoder = GzEncoder::new(Vec::new(), _compression);

    encoder
        .write_all(input)
        .and_then(|_| encoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}

#[wasm_bindgen]
pub fn gunzip(input: &[u8]) -> Result<Vec<u8>, JsValue> {
    let mut encoder = GzDecoder::new(Vec::new());

    encoder
        .write_all(input)
        .and_then(|_| encoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}

#[wasm_bindgen]
pub fn zlib(input: &[u8], compression: Option<u32>) -> Result<Vec<u8>, JsValue> {
    let _compression = compression
        .map(|x| Compression::new(x))
        .unwrap_or(Compression::default());

    let mut encoder = ZlibEncoder::new(Vec::new(), _compression);

    encoder
        .write_all(input)
        .and_then(|_| encoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}

#[wasm_bindgen]
pub fn unzlib(input: &[u8]) -> Result<Vec<u8>, JsValue> {
    let mut encoder = ZlibDecoder::new(Vec::new());

    encoder
        .write_all(input)
        .and_then(|_| encoder.finish())
        .map_err(|e| JsValue::from(&format!("{:?}: {}", e.kind(), e)))
}
