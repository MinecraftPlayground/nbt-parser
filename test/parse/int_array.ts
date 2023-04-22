import { getTagName } from "../get_tag_name.ts";
import { intArrayTag } from "../tags/int_array.ts";

export function intArray(buffer : ArrayBuffer) : intArrayTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0, false)
    const dataLength = data.getUint32(2 + nameLength, false) * 4
    const valueBuffer = new DataView(data.buffer.slice(2 + nameLength + 4, 2 + nameLength + 4 + dataLength))

    const values : number[] = []
    for (let valueIndex = 0; valueIndex < valueBuffer.byteLength; valueIndex += 4) {
        values.push(valueBuffer.getInt32(valueIndex, false))
    }

    return {
        type: 'TAG_Int_Array',
        name: getTagName(buffer.slice(2), nameLength),
        length: 1 + 2 + nameLength + 4 + dataLength,
        value: values
    }
}
