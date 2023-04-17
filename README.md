# NBT-Parser

```js
const map = await fetch('./map.dat').then(response => response.blob())

async function decompressBlob(blob = new Blob()) {
    const ds = new DecompressionStream("gzip");
    const decompressedStream = blob.stream().pipeThrough(ds);
    return await new Response(decompressedStream).blob();
}

const a = document.createElement('a');
a.href = window.URL.createObjectURL(await decompressBlob(map))
a.download = 'download.dat';
a.click()
```
