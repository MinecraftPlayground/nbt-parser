import { getTagName } from "../get_tag_name.ts";
import { byteArrayTag } from "../tags/byte_array.ts";

export function byteArray(buffer : ArrayBuffer) : byteArrayTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0, false)
    const dataLength = data.getUint32(2 + nameLength, false)

    return {
        type: 'TAG_Byte_Array',
        name: getTagName(buffer.slice(2), nameLength),
        length: 1 + 2 + nameLength + 4 + dataLength,
        value: [...new Int8Array(data.buffer.slice(2 + nameLength + 4, 2 + nameLength + 4 + dataLength))]
    }
}
