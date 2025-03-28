import type {
  Byte as _Byte,
  Double as _Double,
  Float as _Float,
  Int as _Int,
  Long as _Long,
  Short as _Short,
  PrimitiveType as _PrimitiveType
} from './primitives/index.ts';

import type {
  List as _List,
  Compound as _Compound,
  ComplexType as _ComplexType
} from './complexes/index.ts';

import type { Data as _Data } from './data.ts'

/** This namespace contains all NBT types */
// deno-lint-ignore no-namespace
export namespace NBT {
  /** This type represents a NBT Byte. */
  export type Byte = _Byte;
  /** This type represents a NBT Double. */
  export type Double = _Double;
  /** This type represents a NBT Float. */
  export type Float = _Float;
  /** This type represents a NBT Int. */
  export type Int = _Int;
  /** This type represents a NBT Long. */
  export type Long = _Long;
  /** This type represents a NBT Short. */
  export type Short = _Short;
  /** This type represents a primitive NBT Type. */
  export type PrimitiveType = _PrimitiveType

  /** This type represents a NBT List. */
  export type List = _List
  /** This type represents a NBT Compound. */
  export type Compound = _Compound
  /** This type represents a complex NBT Type. */
  export type ComplexType = _ComplexType
  
  /** This type represents a NBT Data structure. */
  export type Data = _Data;
}
