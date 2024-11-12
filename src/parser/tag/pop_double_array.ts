import { Reader } from "../../reader.ts";
import { popDouble } from "./pop_double.ts";
import { popInt } from "./pop_int.ts";

export function popDoubleArray(reader : ReturnType<typeof Reader>) {
  const arrayLength = popInt(reader);

  return new Array(arrayLength).fill(0).map(() => popDouble(reader))
}
