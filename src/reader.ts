export function Reader(buffer : ArrayBuffer) {
  let pointer = 0;
  let done = false;

  return {
    done: () => done,
    read: (bytes : number) => {
      pointer += bytes;
      if (pointer > buffer.byteLength) {
        throw new Error('Buffer overflow');
      }
      if (pointer === buffer.byteLength) {
        done = true;
      }
      return buffer.slice(pointer, pointer + bytes);
    }
  }
}
