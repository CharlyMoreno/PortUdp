import * as dotenv from "dotenv";

dotenv.config();

export default {
  PORT_RECEIVER: Number(process.env.PORT_RECEIVER) || 41234,
  PORT_SENDER: Number(process.env.PORT_SENDER) || 41235,
  TIME_TO_SEND: Number(process.env.TIME_TO_SEND) || 3000,
  IP: process.env.IP || '127.0.0.1',
};
