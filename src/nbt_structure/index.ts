import type {
  Byte as _Byte,
  Double as _Double,
  Float as _Float,
  Int as _Int,
  Long as _Long,
  Short as _Short,
  SimpleType as _SimpleType
} from './simple/index.ts';

import type {
  List as _List,
  Compound as _Compound,
  CompoundInList as _CompoundInList,
  ComplexType as _ComplexType
} from './complex/index.ts';

import type { Data as _Data } from './data.ts'
import {
  tagTypes as _tagTypes,
  type TagType as _TagType
} from "./tag_types.ts";

/** This namespace contains all NBT types. */
export namespace NBTStructure {
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
  export type SimpleType = _SimpleType

  /** This type represents a NBT List. */
  export type List = _List
  /** This type represents a NBT Compound. */
  export type Compound = _Compound
  /** This type represents a NBT Compound in a List. */
  export type CompoundInList = _CompoundInList
  /** This type represents a complex NBT Type. */
  export type ComplexType = _ComplexType
  
  /** This type represents a NBT Data structure. */
  export type Data = _Data;
  /** This type represents a NBT Tag Type. */
  export type TagType = _TagType;

  export const tagTypes = _tagTypes;
}
