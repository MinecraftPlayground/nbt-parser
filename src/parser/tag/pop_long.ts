import { Reader } from "../../reader.ts";

export function popLong(reader : ReturnType<typeof Reader>) {
  return reader.read(8).getBigUint64(0, false)
}
