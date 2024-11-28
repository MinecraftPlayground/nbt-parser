import { Reader } from "../reader.ts";
import { tag } from "../tag_type.ts";
import { getTagName } from "./get_tag_name.ts";
import { popByte } from "./tag/pop_byte.ts";


function parse(nbt : any, reader : ReturnType<typeof Reader>) {
  
  const type = reader.read(1).getUint8(0)
  const name = getTagName(reader)

  switch(type) {
    default: {
      break;
    }
    case tag.BYTE: {
      nbt[name] = popByte(reader)

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

