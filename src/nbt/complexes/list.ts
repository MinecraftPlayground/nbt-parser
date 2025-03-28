import type {
  Byte,
  Double,
  Float,
  Int,
  Long,
  Short
} from "../primitives/index.ts";

import type { Compound } from "./compound.ts";

/**
 * This type represents a NBT List.
 */
export type List =
  | List[]
  | Compound[]
  | Byte[]
  | Short[]
  | Int[]
  | Long[]
  | Float[]
  | Double[]
  | string[]
  | Byte[][]
  | Int[][]
  | Long[][];
