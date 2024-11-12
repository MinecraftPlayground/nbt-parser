export function getTagName(view : DataView) : string {
  const nameLength = view.getUint16(0, false);

  return new TextDecoder().decode(view.buffer.slice(3, 3 + nameLength));
}
