import { Reader } from "../../reader.ts";

export function popByte(reader : ReturnType<typeof Reader>) {
  return new DataView(reader.read(1)).getInt8(0)
}
