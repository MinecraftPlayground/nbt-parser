import { getTagName } from "../get_tag_name.ts";
import { ByteTag } from "../tags/byte.ts";

export function byte(buffer : ArrayBuffer) : ByteTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0)
    
    return {
        type: 'TAG_Byte',
        name: getTagName(buffer.slice(2), nameLength),
        byteLength: 1 + 2 + nameLength + 1,
        value: data.getInt8(1 + 2 + nameLength - 1)
    }
}
