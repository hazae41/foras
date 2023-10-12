extern crate alloc;

use wasm_bindgen::prelude::*;

use crate::Memory;

#[wasm_bindgen]
pub fn unzlib(input: &Memory) -> Result<Memory, JsError> {
    use std::io::Write;

    let mut decoder = flate2::write::ZlibDecoder::new(Vec::new());

    decoder.write_all(&input.inner).map_err(JsError::from)?;
    decoder.finish().map(Memory::new).map_err(JsError::from)
}

#[wasm_bindgen]
pub struct ZlibDecoder {
    pub(crate) inner: Box<flate2::write::ZlibDecoder<Vec<u8>>>,
}

#[wasm_bindgen]
impl ZlibDecoder {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let decoder = flate2::write::ZlibDecoder::new(Vec::new());
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
