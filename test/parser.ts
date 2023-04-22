

export default async function parser(buffer : ArrayBuffer) {
    const data = new DataView(buffer);
    console.log('-'.repeat(100));
    
    for (let charIndex = 0; charIndex < data.byteLength; charIndex++) {
        switch (data.getUint8(charIndex)) {
            default: {
                // console.log(charIndex.toString().padStart(4, '0'), 'Data', text.getUint8(charIndex));
                break;
            }

            case 0: {
                console.log(charIndex.toString().padStart(6, '0'), '0: TAG_End');
                break;
            }
            // byte
            case 1: {
                const nameLength = 0
                const name = new TextDecoder('utf-8').decode(data.buffer.slice(charIndex + 3, charIndex + 3 + nameLength))
                const value = data.getUint8(charIndex + 3 + nameLength + 1)
                console.log(`${charIndex.toString().padStart(6, '0')} 1: TAG_Byte: '${name}', NameLength: ${nameLength}, value: ${value}`);
                charIndex = charIndex + nameLength + 3
                break;
            }

            case 2: {
                console.log(charIndex.toString().padStart(6, '0'), '2: TAG_Short');
                break;
            }

            case 3: {
                console.log(charIndex.toString().padStart(6, '0'), '3: TAG_Int');
                break;
            }

            case 4: {
                console.log(charIndex.toString().padStart(6, '0'), '4: TAG_Long');
                break;
            }

            case 5: {
                console.log(charIndex.toString().padStart(6, '0'), '5: TAG_Float');
                break;
            }

            case 6: {
                console.log(charIndex.toString().padStart(6, '0'), '6: TAG_Double');
                break;
            }

            case 7: {
                console.log(charIndex.toString().padStart(6, '0'), '7: TAG_Byte_Array');
                break;
            }

            case 8: {
                console.log(charIndex.toString().padStart(6, '0'), '8: TAG_String');
                break;
            }

            case 9: {
                console.log(charIndex.toString().padStart(6, '0'), '9: TAG_List');
                break;
            }

            case 10: {
                // const nameLength = data.getUint16(charIndex + 1, false)
                // console.log(charIndex.toString().padStart(4, '0'), '10: TAG_Compound', nameLength, new TextDecoder().decode(text.buffer.slice(charIndex + 3, charIndex + 3 + nameLength)));
                // charIndex += 2 + nameLength;
                break;
            }
                
        
        }
        // console.log(`${charIndex.toString().padStart(4, '0')}: ${charCode.toString(10).padStart(6, '0')} ${charCode.toString(16).padStart(2, '0').toUpperCase()}`);
        
    }
}

JSON.parse

const nbt = {
    type: 'compound',
    value: {
        stringNameKey: {
            type: 'string',
            value: 'value'
        },
        compoundNameKey: {
            type: 'compound',
            value: {
                byteNameKey: {
                    type: 'byte',
                    value: 5
                }
            }
        }
    }
}

