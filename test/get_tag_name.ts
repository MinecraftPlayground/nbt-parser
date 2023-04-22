/**
 * Get the name from a buffer.
 * @param {ArrayBuffer} buffer A buffer from where to get the name
 * @param {number} length Tha lenght of the name
 * @returns {string} The name from the buffer
 */
export function getTagName(buffer : ArrayBuffer, length : number) : string {
    return new TextDecoder().decode(buffer.slice(0, length))
}
