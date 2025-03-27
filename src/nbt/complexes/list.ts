import { PrimitiveType } from "../primitives/index.ts";
import { Compound } from "./compound.ts";

/**
 * This type represents a NBT List.
 */
export type List<Type extends
  | List<Type>
  | Compound<Type>
  | PrimitiveType
> = Type[];
