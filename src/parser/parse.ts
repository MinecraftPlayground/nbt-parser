import { getTagName } from "./get_tag_name.ts";

export function parse(buffer : ArrayBuffer) {
  const data = new DataView(buffer)
  const type = data.getUint8(0)

  switch(type) {
    case 1: {
      
      break;
    }
  }

  parse(buffer.slice(1, buffer.byteLength))
}
