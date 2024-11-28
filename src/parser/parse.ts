import { Reader } from "../reader.ts";
import { tag } from "../tag_type.ts";
import { getTagName } from "./get_tag_name.ts";
import { popByte } from "./tag/pop_byte.ts";
import { popByteArray } from "./tag/pop_byte_array.ts";
import { popDouble } from "./tag/pop_double.ts";
import { popFloat } from "./tag/pop_float.ts";
import { popInt } from "./tag/pop_int.ts";
import { popIntArray } from "./tag/pop_int_array.ts";
import { popLong } from "./tag/pop_long.ts";
import { popLongArray } from "./tag/pop_long_array.ts";
import { popShort } from "./tag/pop_short.ts";
import { popString } from "./tag/pop_string.ts";


function parse(nbt : any, reader : ReturnType<typeof Reader>) {

  console.log('reading TagType');
  const type = reader.read(1).getUint8(0)

  console.log('reading TagName');
  const name = getTagName(reader)

  switch(type) {
    default: {
      console.log('reading Unknown');
      
      break;
    }
    case tag.BYTE: {

      console.log('reading Byte')
      nbt[name] = popByte(reader)

      break;
    }
    case tag.BYTE_ARRAY: {

      console.log('reading Byte')
      nbt[name] = popByteArray(reader)

      break;
    }
    case tag.DOUBLE: {

      console.log('reading Byte')
      nbt[name] = popDouble(reader)

      break;
    }
    case tag.FLOAT: {

      console.log('reading Byte')
      nbt[name] = popFloat(reader)

      break;
    }
    case tag.INT: {

      console.log('reading Byte')
      nbt[name] = popInt(reader)

      break;
    }
    case tag.INT_ARRAY: {

      console.log('reading Byte')
      nbt[name] = popIntArray(reader)

      break;
    }
    case tag.LONG: {

      console.log('reading Byte')
      nbt[name] = popLong(reader)

      break;
    }
    case tag.LONG_ARRAY: {

      console.log('reading Byte')
      nbt[name] = popLongArray(reader)

      break;
    }
    case tag.SHORT: {

      console.log('reading Byte')
      nbt[name] = popShort(reader)

      break;
    }
    case tag.STRING: {

      console.log('reading Byte')
      nbt[name] = popString(reader)

      break;
    }
  }

  if(!reader.done()) {
    parse(nbt, reader)
  }

  return nbt;
}

export function parser(data : ArrayBuffer) {
  console.log(new Uint8Array(data));
  
  return parse({}, Reader(data));
}

