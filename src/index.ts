import { parseData } from "./parser/parse_data.ts";

console.log(parseData(Deno.readFileSync('./data/nbt_test.dat').buffer))
