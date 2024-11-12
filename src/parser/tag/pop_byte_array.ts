import { Reader } from "../../reader.ts";
import { popByte } from "./pop_byte.ts";
import { popInt } from "./pop_int.ts";

export function popByteArray(reader : ReturnType<typeof Reader>) {
  const arrayLength = popInt(reader);

  return new Array(arrayLength).fill(0).map(() => popByte(reader))
}
