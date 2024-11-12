import { Reader } from "../../reader.ts";

export function popFloat(reader : ReturnType<typeof Reader>) {
  return new DataView(reader.read(4)).getFloat32(0, false)
}
