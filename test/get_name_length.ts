export default function getNameLength(data : DataView, charIndex : number) : number {
    return data.getInt16(charIndex + 1, false)
}
