import { Reader } from "../../reader.ts";

export function popDouble(reader : ReturnType<typeof Reader>) {
  return new DataView(reader.read(8)).getFloat64(0, false)
}
