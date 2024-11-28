export function Reader(buffer : ArrayBuffer) {
  let pointer = 0;
  let done = false;

  return {
    done: () => done,
    read: (bytes : number) => {
      console.log(`Reading ${bytes} byte(s) at position ${pointer} from max ${buffer.byteLength}, reading ${new DataView(buffer.slice(pointer, pointer+1)).getUint8(0)}`);

      const data = buffer.slice(pointer, Math.min(pointer + bytes, buffer.byteLength))
      
      pointer += bytes;
      if (pointer > buffer.byteLength) {
        throw new Error(`Buffer overflow, trying to read position ${pointer} from max ${buffer.byteLength}`);
      }
      if (pointer === buffer.byteLength) {
        done = true;
      }
      return new DataView(data);
    }
  }
}
