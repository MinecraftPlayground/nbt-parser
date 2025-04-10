import type { PrimitiveType } from "../primitives/index.ts";
import type { Compound } from "./compound.ts";
import type { List } from "./list.ts";

/** This type represents a NBT Compound in a List. */
export type CompoundInList = {
  [key : string] : typeof key extends '' ? CompoundInList : List | PrimitiveType;
}
