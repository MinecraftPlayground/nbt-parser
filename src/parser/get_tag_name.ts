import { BinaryReader } from "jsr:@typescriptplayground/binary-reader";


export function getTagName(reader : BinaryReader) : string {
  const nameLength = reader.readUint16();

  return new TextDecoder().decode(reader.read(nameLength));
}
