import { PrimitiveType } from "../primitives/index.ts";
import { List } from "./list.ts";

/**
 * This type represents a NBT Compound.
 */
export interface Compound<Type extends
  | Compound<Type>
  | List<Type>
  | PrimitiveType
> {
  [key : string] : 
    | Compound<Type>
    | List<Type>
    | PrimitiveType
}
