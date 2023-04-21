import { ByteArrayTag } from "./byte_array.ts";
import { ByteTag } from "./byte.ts";
import { DoubleTag } from "./double.ts";
import { FloatTag } from "./float.ts";
import { IntArrayTag } from "./int_array.ts";
import { IntTag } from "./int.ts";
import { ListTag } from "./list.ts";
import { LongArrayTag } from "./long_array.ts";
import { LongTag } from "./long.ts";
import { ShortTag } from "./short.ts";
import { StringTag } from "./string.ts";
import { Tag } from "./tag.ts";

/**
 * TAG_Compound interface
 * @interface CompoundTag
 * @extends Tag
 */
export interface CompoundTag extends Tag {
    value :
        Tag | 
        Record<string | number | symbol, never>
}

