import parser from "./parser.ts";

const map = new Blob([Deno.readFileSync('./test/maps/map_4_decompressed.dat')])

console.log(await parser(await map.arrayBuffer()));

