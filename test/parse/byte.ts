import { getTagName } from "../get_tag_name.ts";
import { byteTag } from "../tags/byte.ts";

export function byte(buffer : ArrayBuffer) : byteTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0)
    
    return {
        type: 'TAG_Byte',
        name: getTagName(buffer.slice(2), nameLength),
        length: 1 + 2 + nameLength + 1,
        value: data.getInt8(1 + 2 + nameLength - 1)
    }
}
