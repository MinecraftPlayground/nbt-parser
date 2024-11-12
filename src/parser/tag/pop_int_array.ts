import { Reader } from "../../reader.ts";
import { popInt } from "./pop_int.ts";

export function popIntArray(reader : ReturnType<typeof Reader>) {
  const arrayLength = popInt(reader);

  return new Array(arrayLength).fill(0).map(() => popInt(reader))
}
