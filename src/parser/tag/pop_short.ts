import { Reader } from "../../reader.ts";

export function popShort(reader : ReturnType<typeof Reader>) {
  return reader.read(2).getUint16(0, false)
}
