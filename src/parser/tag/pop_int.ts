import { Reader } from "../../reader.ts";

export function popInt(reader : ReturnType<typeof Reader>) {
  return reader.read(4).getUint32(0, false)
}
