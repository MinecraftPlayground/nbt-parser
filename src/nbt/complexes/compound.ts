import type { PrimitiveType } from "../primitives/index.ts";
import type { List } from "./list.ts";

/** This type represents a NBT Compound. */
export type Compound = { '':
  | List
  | PrimitiveType
} & { [key: string]:
  | Compound
  | List
  | PrimitiveType
};
