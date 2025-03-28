import type { Byte } from "./byte.ts";
import type { Double } from "./double.ts";
import type { Float } from "./float.ts";
import type { Int } from "./int.ts";
import type { Long } from "./long.ts";
import type { Short } from "./short.ts";

/** This type represents a primitive NBT Type. */
export type PrimitiveType =
  | Byte
  | Short
  | Int
  | Long
  | Float
  | Double
  | string
  | Byte[]
  | Int[]
  | Long[];
