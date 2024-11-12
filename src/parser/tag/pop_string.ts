import { Reader } from "../../reader.ts";
import { popShort } from "./pop_short.ts";

export function popString(reader : ReturnType<typeof Reader>) {
  const stringLength = popShort(reader);
  return new TextDecoder().decode(reader.read(stringLength))
}
