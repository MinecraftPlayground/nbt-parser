import { PrimitiveType } from "./primitives/index.ts";
import { ComplexType } from "./complexes/complex_type.ts";

/**
 * This interface represents a NBT Data structure
 */
export type Data<Type extends ComplexType<Type>> = 
  | ComplexType<Type>
  | PrimitiveType;
