import { getTagName } from "../get_tag_name.ts";
import { byteTag } from "../tags/byte.ts";

export function int(buffer : ArrayBuffer) : byteTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0)
    
    return {
        type: 'TAG_Int',
        name: getTagName(buffer.slice(2), nameLength),
        length: 1 + 2 + nameLength + 4,
        value: data.getInt32(1 + 2 + nameLength - 1, false)
    }
}
