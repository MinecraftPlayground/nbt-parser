import { parse } from "./parse.ts";
import parser from "./parser.ts";

const map = new Blob([Deno.readFileSync('./test/maps/map_4_nbt_test.dat')])
console.log('-'.repeat(100));

parse(await map.arrayBuffer())

