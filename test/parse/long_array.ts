import { getTagName } from "../get_tag_name.ts";
import { LongArrayTag } from "../tags/long_array_tag.ts";

export function longArray(buffer : ArrayBuffer) : LongArrayTag {
    
    const data = new DataView(buffer)
    const nameLength = data.getUint16(0, false)
    const dataLength = data.getUint32(2 + nameLength, false) * 8
    const valueBuffer = new DataView(data.buffer.slice(2 + nameLength + 4, 2 + nameLength + 4 + dataLength))

    const values : number[] = []
    for (let valueIndex = 0; valueIndex < valueBuffer.byteLength; valueIndex += 8) {
        values.push(Number(valueBuffer.getBigInt64(valueIndex, false)))
    }

    return {
        type: 'TAG_Long_Array',
        name: getTagName(buffer.slice(2), nameLength),
        byteLength: 1 + 2 + nameLength + 4 + dataLength,
        value: values
    }
}
