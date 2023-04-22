import { getTagName } from "../get_tag_name.ts";
import { floatTag } from "../tags/float.ts";

export function float(buffer : ArrayBuffer) : floatTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0)
    
    return {
        type: 'TAG_Float',
        name: getTagName(buffer.slice(2), nameLength),
        length: 1 + 2 + nameLength + 4,
        value: data.getFloat32(1 + 2 + nameLength - 1, false)
    }
}
