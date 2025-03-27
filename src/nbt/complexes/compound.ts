import { PrimitiveType } from "../primitives/index.ts";
import { List } from "./list.ts";

/**
 * This type represents a NBT Compound.
 */
export interface Compound {
  [key : string] :
    | Compound
    | List
    | PrimitiveType
}
