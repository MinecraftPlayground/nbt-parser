import { getTagName } from "../get_tag_name.ts";
import { ByteArrayTag } from "../tags/byte_array_tag.ts";

export function byteArray(buffer : ArrayBuffer) : ByteArrayTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0, false)
    const dataLength = data.getUint32(2 + nameLength, false)

    return {
        type: 'TAG_Byte_Array',
        name: getTagName(buffer.slice(2), nameLength),
        byteLength: 1 + 2 + nameLength + 4 + dataLength,
        value: [...new Int8Array(data.buffer.slice(2 + nameLength + 4, 2 + nameLength + 4 + dataLength))]
    }
}
