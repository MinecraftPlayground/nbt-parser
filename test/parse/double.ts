import { getTagName } from "../get_tag_name.ts";
import { doubleTag } from "../tags/double.ts";

export function double(buffer : ArrayBuffer) : doubleTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0)
    
    return {
        type: 'TAG_Double',
        name: getTagName(buffer.slice(2), nameLength),
        length: 1 + 2 + nameLength + 8,
        value: data.getFloat64(1 + 2 + nameLength - 1, false)
    }
}
