import type { PrimitiveType } from "../primitives/index.ts";
import type { Compound } from "./compound.ts";

// deno-lint-ignore no-explicit-any
type PrimitiveTypeArray<Type = PrimitiveType> = Type extends any ? Type[] : never;

/** This type represents a NBT List. */
export type List =
  | List[]
  | Compound[]
  | PrimitiveTypeArray
