import { Reader } from "../../reader.ts";

export function popInt(reader : ReturnType<typeof Reader>) {
  return new DataView(reader.read(4)).getUint32(0, false)
}
