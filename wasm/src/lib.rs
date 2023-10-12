extern crate alloc;

pub mod deflate;
pub mod gzip;
pub mod zlib;

use alloc::vec::Vec;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Memory {
    pub(crate) inner: Vec<u8>,
}

#[wasm_bindgen]
impl Memory {
    #[wasm_bindgen(constructor)]
    pub fn new(inner: Vec<u8>) -> Memory {
        Memory { inner }
    }

    #[wasm_bindgen]
    pub fn ptr(&self) -> *const u8 {
        self.inner.as_ptr()
    }

    #[wasm_bindgen]
    pub fn len(&self) -> usize {
        self.inner.len()
    }
}
