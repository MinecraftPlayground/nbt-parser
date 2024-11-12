import { Reader } from "../../reader.ts";

export function popShort(reader : ReturnType<typeof Reader>) {
  return new DataView(reader.read(2)).getUint16(0, false)
}
