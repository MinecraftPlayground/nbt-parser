import { parse } from "./parser/parse.ts";


console.log(
  parse(Deno.readFileSync('./data/nbt_test.dat').buffer)
)
