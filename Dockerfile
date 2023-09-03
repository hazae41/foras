FROM rust:1.71.0

WORKDIR /app

RUN cargo install wasm-pack

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash
RUN apt-get install -y nodejs
RUN npm config set cache /tmp --global

RUN chmod -R 777 /usr/local/cargo
RUN chmod -R 777 /root

CMD npm ci && npm run build