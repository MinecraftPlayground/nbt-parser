import { parser } from "./parser/parse.ts";


console.log(
  parser(Deno.readFileSync('./data/nbt_test.dat').buffer)
)
