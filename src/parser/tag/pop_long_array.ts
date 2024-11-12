import { Reader } from "../../reader.ts";
import { popInt } from "./pop_int.ts";
import { popLong } from "./pop_long.ts";

export function popLongArray(reader : ReturnType<typeof Reader>) {
  const arrayLength = popInt(reader);

  return new Array(arrayLength).fill(0).map(() => popLong(reader))
}
