extern crate alloc;

use alloc::vec::Vec;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn gzip(input: &[u8], compression: Option<u32>) -> Result<Vec<u8>, JsError> {
    use std::io::Write;

    let _compression = compression
        .map(|x| flate2::Compression::new(x))
        .unwrap_or(flate2::Compression::default());

    let mut encoder = flate2::write::GzEncoder::new(Vec::new(), _compression);

    encoder.write_all(input).map_err(JsError::from)?;
    encoder.finish().map_err(JsError::from)
}

#[wasm_bindgen]
pub fn gunzip(input: &[u8]) -> Result<Vec<u8>, JsError> {
    use std::io::Write;

    let mut decoder = flate2::write::GzDecoder::new(Vec::new());

    decoder.write_all(input).map_err(JsError::from)?;
    decoder.finish().map_err(JsError::from)
}

#[wasm_bindgen]
pub struct GzEncoder {
    inner: Box<flate2::write::GzEncoder<Vec<u8>>>,
}

#[wasm_bindgen]
impl GzEncoder {
    #[wasm_bindgen(constructor)]
    pub fn new(compression: Option<u32>) -> Self {
        let _compression = compression
            .map(|x| flate2::Compression::new(x))
            .unwrap_or(flate2::Compression::default());

        let decoder = flate2::write::GzEncoder::new(Vec::new(), _compression);
        let inner = Box::new(decoder);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn write(&mut self, input: &[u8]) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.write_all(input).map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn flush(&mut self) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.flush().map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn read(&mut self) -> Vec<u8> {
        let output = self.inner.get_ref().to_vec();

        self.inner.get_mut().clear();

        output
    }

    #[wasm_bindgen]
    pub fn finish(self) -> Result<Vec<u8>, JsError> {
        self.inner.finish().map_err(JsError::from)
    }
}

#[wasm_bindgen]
pub struct GzDecoder {
    inner: Box<flate2::write::GzDecoder<Vec<u8>>>,
}

#[wasm_bindgen]
impl GzDecoder {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let decoder = flate2::write::GzDecoder::new(Vec::new());
        let inner = Box::new(decoder);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn write(&mut self, input: &[u8]) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.write_all(input).map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn flush(&mut self) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.flush().map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn read(&mut self) -> Vec<u8> {
        let output = self.inner.get_ref().to_vec();

        self.inner.get_mut().clear();

        output
    }

    #[wasm_bindgen]
    pub fn finish(self) -> Result<Vec<u8>, JsError> {
        self.inner.finish().map_err(JsError::from)
    }
}
