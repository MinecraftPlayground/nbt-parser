import type { SimpleType } from "../simple/index.ts";
import type { Compound } from "./compound.ts";
import type { List } from "./list.ts";

/** This type represents a NBT Compound in a List. */
export type CompoundInList = {
  ''? :
    | List
    | SimpleType
    
  [key : string] :
    | Compound
    | List
    | SimpleType
    | undefined
} & 
  Record<
    Exclude<
      string,
      ''
    >,
    | Compound
    | List
    | SimpleType
  >

