import dgram from "dgram";
import { AddressInfo } from "net";
import config from "./config/config";
import "colorts/lib/string";
import bcrypt from "bcrypt";

const server = dgram.createSocket("udp4");

server.on("message", (message: string, address: AddressInfo) => {
  console.log(
    `[+] Receive message from ${address.address}:${address.port}`.yellow
  );
  console.log(`[Message] ${message}\n`.green);
  const hash = bcrypt.hashSync(message, 10);
  server.send(hash, config.PORT_SENDER, config.IP);
});

server.on("listening", () => {
  console.log(`⚡ Server listening on port ${config.PORT_RECEIVER}`.yellow);
});

server.bind(config.PORT_RECEIVER);
