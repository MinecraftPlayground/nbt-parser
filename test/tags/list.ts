import { ByteTag } from "./byte.ts";
import { ByteArrayTag } from "./byte_array.ts";
import { CompoundTag } from "./compound.ts";
import { DoubleTag } from "./double.ts";
import { FloatTag } from "./float.ts";
import { IntTag } from "./int.ts";
import { IntArrayTag } from "./int_array.ts";
import { LongTag } from "./long.ts";
import { LongArrayTag } from "./long_array.ts";
import { ShortTag } from "./short.ts";
import { StringTag } from "./string.ts";
import { Tag } from "./tag.ts";

/**
 * TAG_List interface
 * @interface ListTag
 * @extends Tag
 */
export interface ListTag<
    type extends Tag
> extends Tag {
    value : 
    type[] | 
    []
}


const e : ListTag<> = {
    length: 5,
    name: '',
    value: [{length:5,name:'',value:{}}]
}
