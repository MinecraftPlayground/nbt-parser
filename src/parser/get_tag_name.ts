import { Reader } from "../reader.ts";

export function getTagName(reader : ReturnType<typeof Reader>) : string {
  const nameLength = reader.read(2).getUint16(0, false);

  return new TextDecoder().decode(reader.read(nameLength));
}
