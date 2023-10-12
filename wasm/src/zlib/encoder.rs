extern crate alloc;

use alloc::vec::Vec;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn zlib(input: &Memory, compression: Option<u32>) -> Result<Memory, JsError> {
    use std::io::Write;

    let _compression = compression
        .map(|x| flate2::Compression::new(x))
        .unwrap_or(flate2::Compression::default());

    let mut encoder = flate2::write::ZlibEncoder::new(Vec::new(), _compression);

    encoder.write_all(&input.inner).map_err(JsError::from)?;
    encoder.finish().map(Memory::new).map_err(JsError::from)
}

#[wasm_bindgen]
pub struct ZlibEncoder {
    pub(crate) inner: Box<flate2::write::ZlibEncoder<Vec<u8>>>,
}

#[wasm_bindgen]
impl ZlibEncoder {
    #[wasm_bindgen(constructor)]
    pub fn new(compression: Option<u32>) -> Self {
        let _compression = compression
            .map(|x| flate2::Compression::new(x))
            .unwrap_or(flate2::Compression::default());

        let decoder = flate2::write::ZlibEncoder::new(Vec::new(), _compression);
        let inner = Box::new(decoder);

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn write(&mut self, input: &Memory) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.write_all(&input.inner).map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn flush(&mut self) -> Result<(), JsError> {
        use std::io::Write;

        self.inner.flush().map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn read(&mut self) -> Memory {
        let output = self.inner.get_ref().to_vec();

        self.inner.get_mut().clear();

        Memory::new(output)
    }

    #[wasm_bindgen]
    pub fn finish(self) -> Result<Memory, JsError> {
        self.inner.finish().map(Memory::new).map_err(JsError::from)
    }
}
