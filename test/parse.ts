import { byte } from "./parse/byte.ts";
import { byteArray } from "./parse/byte_array.ts";
import { double } from "./parse/double.ts";
import { float } from "./parse/float.ts";
import { int } from "./parse/int.ts";
import { intArray } from "./parse/int_array.ts";
import { longArray } from "./parse/long_array.ts";

export function parse(buffer : ArrayBuffer) {
    const data = new DataView(buffer)

    for (let charIndex = 0; charIndex < data.byteLength; charIndex++) {
        // console.log(charIndex);
        
        if (data.getInt8(charIndex) === 7) {
            const byteArrayTag = byteArray(data.buffer.slice(charIndex + 1))
            console.log(byteArrayTag);
            charIndex = charIndex + byteArrayTag.length - 1
        }
        if (data.getInt8(charIndex) === 1) {
            const byteTag = byte(data.buffer.slice(charIndex + 1))
            console.log(byteTag);
            charIndex = charIndex + byteTag.length - 1
        }
        if (data.getInt8(charIndex) === 6) {
            const doubleTag = double(data.buffer.slice(charIndex + 1))
            console.log(doubleTag);
            charIndex = charIndex + doubleTag.length - 1
        }
        if (data.getInt8(charIndex) === 5) {
            const floatTag = float(data.buffer.slice(charIndex + 1))
            console.log(floatTag);
            charIndex = charIndex + floatTag.length - 1
        }
        if (data.getInt8(charIndex) === 11) {
            const intArrayTag = intArray(data.buffer.slice(charIndex + 1))
            console.log(intArrayTag);
            charIndex = charIndex + intArrayTag.length - 1
        }
        if (data.getInt8(charIndex) === 3) {
            const intTag = int(data.buffer.slice(charIndex + 1))
            console.log(intTag);
            charIndex = charIndex + intTag.length - 1
        }
        if (data.getInt8(charIndex) === 12) {
            const longArrayTag = longArray(data.buffer.slice(charIndex + 1))
            console.log(longArrayTag);
            charIndex = charIndex + longArrayTag.length - 1
        }
    }
}
