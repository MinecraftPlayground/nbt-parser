import { BinaryReader } from "@typescriptplayground/binary-reader";

/**
 * This function reads the tag name from a tag.
 *
 * @param reader The binary reader to read from
 * @returns The tag name.
 */
export function getTagName(reader : BinaryReader) : string {
  const nameLength = reader.readUint16();

  return new TextDecoder().decode(reader.read(nameLength));
}
