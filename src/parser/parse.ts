import BinaryReader from "https://jsr.io/@typescriptplayground/binary-reader/0.3.0/src/binary_reader.ts";
import { NBTStructure } from "../nbt_structure/index.ts";
import { getTagName } from "./get_tag_name.ts";

/**
 * This function parses the NBT data recursively.
 *
 * @param data The binary data of the NBT file
 * @returns The parsed NBT structure.
 */
export function parse(
  reader : BinaryReader,
  currentNbtData : NBTStructure.Data,
  currentTagName? : string,
  currentTagType? : NBTStructure.TagType
) : NBTStructure.Data {

  const tagType : NBTStructure.TagType = currentTagType ?? reader.readUint8() as NBTStructure.TagType;

  if (tagType != NBTStructure.tagTypes.END) {
    
    const tagName = currentTagName ?? getTagName(reader);
    
    switch(tagType) {
      case NBTStructure.tagTypes.BYTE: {
        currentNbtData[tagName] = reader.readInt8();
        break;
      }
      
      case NBTStructure.tagTypes.SHORT: {
        currentNbtData[tagName] = reader.readInt16();
        break;
      }
      
      case NBTStructure.tagTypes.INT: {
        currentNbtData[tagName] = reader.readInt32();
        break;
      }
      
      case NBTStructure.tagTypes.LONG: {
        currentNbtData[tagName] = reader.readInt64();
        break;
      }
      
      case NBTStructure.tagTypes.FLOAT: {
        currentNbtData[tagName] = reader.readFloat32();
        break;
      }
      
      case NBTStructure.tagTypes.DOUBLE: {
        currentNbtData[tagName] = reader.readInt64();
        break;
      }
      
      case NBTStructure.tagTypes.BYTE_ARRAY: {
        const arrayLength = reader.readInt32();
        currentNbtData[tagName] = [...new Int8Array(reader.read(arrayLength))];
        break;
      }
      
      case NBTStructure.tagTypes.STRING: {
        const stringLength = reader.readInt16();
        currentNbtData[tagName] = new TextDecoder().decode(reader.read(stringLength));
        break;
      }
      
      case NBTStructure.tagTypes.LIST: {
        const listTagType = reader.readUint8() as NBTStructure.TagType;
        const listLength = reader.readUint32();
        const list : NBTStructure.List = new Array<NBTStructure.Data>()
        for (let i = 0; i < listLength; i++) {
          list.push(parse(reader, {}, tagName, listTagType))
        }
        currentNbtData[tagName] = list;
        break;
      }
      
      case NBTStructure.tagTypes.COMPOUND: {
        currentNbtData[tagName] = parse(reader, {});
        break;
      }
      
      case NBTStructure.tagTypes.INT_ARRAY: {
        const arrayLength = reader.readInt32();
        currentNbtData[tagName] = [...new Int8Array(reader.read(arrayLength))]
        break;
      }
      
      case NBTStructure.tagTypes.LONG_ARRAY: {
        const arrayLength = reader.readInt32();
        currentNbtData[tagName] = [...new Int8Array(reader.read(arrayLength))]
        break;
      }
      
      default: {
        break;
      }
    }
    
  }

  if(!reader.done) {
    parse(reader, currentNbtData);
  }

  return currentNbtData;
}
