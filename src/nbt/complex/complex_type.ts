import { Compound } from "./compound.ts";
import { List } from "./list.ts";


/** This type represents a complex NBT Type. */
export type ComplexType =
  | Compound
  | List
