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
        switch(data.getInt8(charIndex)) {
            case 7: {
                const byteArrayTag = byteArray(data.buffer.slice(charIndex + 1))
                console.log(byteArrayTag);
                charIndex = charIndex + byteArrayTag.byteLength - 1
                break;
            }
            case 1: {
                const byteTag = byte(data.buffer.slice(charIndex + 1))
                console.log(byteTag);
                charIndex = charIndex + byteTag.byteLength - 1
                break;
            }
            case 6: {
                const doubleTag = double(data.buffer.slice(charIndex + 1))
                console.log(doubleTag);
                charIndex = charIndex + doubleTag.byteLength - 1
                break;
            }
            case 5: {
                const floatTag = float(data.buffer.slice(charIndex + 1))
                console.log(floatTag);
                charIndex = charIndex + floatTag.byteLength - 1
                break;
            }
            case 11: {
                const intArrayTag = intArray(data.buffer.slice(charIndex + 1))
                console.log(intArrayTag);
                charIndex = charIndex + intArrayTag.byteLength - 1
                break;
            }
            case 3: {
                const intTag = int(data.buffer.slice(charIndex + 1))
                console.log(intTag);
                charIndex = charIndex + intTag.byteLength - 1
                break;
            }
            case 12: {
                const longArrayTag = longArray(data.buffer.slice(charIndex + 1))
                console.log(longArrayTag);
                charIndex = charIndex + longArrayTag.byteLength - 1
                break;
            }
        }
    }
}
