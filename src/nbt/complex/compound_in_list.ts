import type { SimpleType } from "../simple/index.ts";
import type { Compound } from "./compound.ts";
import type { List } from "./list.ts";

/** This type represents an empty NBT Compound. */
type EmptyCompound = {
  [key : string] : never;
}

/** This type represents a NBT Compound wrapper in a List. */
type CompoundWrapper = {
  '' :
    | List
    | SimpleType
}

/** This type represents a NBT Compound in a List. */
export type CompoundInList = EmptyCompound | CompoundWrapper | Compound
