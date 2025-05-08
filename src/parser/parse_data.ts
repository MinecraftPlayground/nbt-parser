import { BinaryReader } from '@typescriptplayground/binary-reader'
import { parse } from "./parse.ts";
import { NBTStructure } from "../nbt_structure/index.ts";

/**
 * This  function parses a NBT file.
 *
 * @param data The binary data of the NBT file
 * @returns The parsed NBT structure.
 */
export function parseData(data : ArrayBuffer) : NBTStructure.Compound {
  return parse(new BinaryReader(data), {});
}

