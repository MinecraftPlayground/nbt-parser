import type { SimpleType } from "../simple/index.ts";
import type { Compound } from "./compound.ts";
import type { List } from "./list.ts";

type EmptyCompound = {
  [key : string] : never;
}

type CompoundWrapper = {
  '' :
    | List
    | SimpleType
}

type AnyKeyCompound = {
  [key : string] :
    | Compound
    | List
    | SimpleType
} & {
  ''? : never
}

/** This type represents a NBT Compound in a List. */
export type CompoundInList = EmptyCompound | CompoundWrapper | AnyKeyCompound
