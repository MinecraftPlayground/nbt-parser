import type { Byte } from "./byte.ts";
import type { ByteArray } from "./byte_array.ts";
import type { Double } from "./double.ts";
import type { Float } from "./float.ts";
import type { Int } from "./int.ts";
import type { IntArray } from "./int_array.ts";
import type { Long } from "./long.ts";
import type { LongArray } from "./long_array.ts";
import type { Short } from "./short.ts";

/** This type represents a primitive NBT Type. */
export type SimpleType =
  | Byte
  | Short
  | Int
  | Long
  | Float
  | Double
  | string
  | ByteArray
  | IntArray
  | LongArray;
