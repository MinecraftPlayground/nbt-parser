import type { SimpleType } from "../simple/index.ts";
import type { List } from "./list.ts";

/** This type represents a NBT Compound. */
export type Compound = {
  [key : string] :
    | Compound
    | List
    | SimpleType
} & {
  ''? : never
}
