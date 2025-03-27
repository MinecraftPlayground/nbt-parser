// deno-lint-ignore-file no-namespace
import type { Byte as _Byte } from './primitives/index.ts';
import type { Double as _Double } from './primitives/index.ts';
import type { Float as _Float } from './primitives/index.ts';
import type { Int as _Int } from './primitives/index.ts';
import type { Long as _Long } from './primitives/index.ts';
import type { Short as _Short } from './primitives/index.ts';
import type { PrimitiveType as _PrimitiveType } from './primitives/index.ts';

// import type { Data as _Data } from './data.ts'


export namespace NBT {
  export type Byte = _Byte;
  export type Double = _Double;
  export type Float = _Float;
  export type Int = _Int;
  export type Long = _Long;
  export type Short = _Short;

  export type PrimitiveType = _PrimitiveType

  // export type Data<Type> = _Data<Type>;

}
