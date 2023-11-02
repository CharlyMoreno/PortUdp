import dgram from "dgram";
import { AddressInfo } from "net";
import config from "./config/config";
import "colorts/lib/string";
import { getRandomText } from "./util/lorem";

const client = dgram.createSocket("udp4");

client.on("message", (message: string, address: AddressInfo) => {
  console.log(
    `[+] Receive message from ${address.address}:${address.port}`.yellow
  );
  console.log(`[Message] ${message}\n`.green);
});

const sendMessage = () => {
  const msg = getRandomText();
  console.log(
    `[+] Sending ${config.IP}:${config.PORT_RECEIVER}-> ${msg}`.green
  );
  client.send(msg, config.PORT_RECEIVER, config.IP);
};

// Send messages at regular time intervals
setInterval(sendMessage, 4000);

client.on("close", () => {
  console.log("[X] Server closed".red);
});

client.bind(config.PORT_SENDER);
