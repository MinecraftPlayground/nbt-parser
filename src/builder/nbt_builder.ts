import { NBTStructure } from "../nbt_structure/index.ts";
import { nameToLong } from "./checks/name_to_long.ts";

export class NBTBuilder {
  private rootName : string;
  private nbtData : NBTStructure.Data = {};
  
  public constructor(rootName : string) {
    this.rootName = rootName;
  }

  public setByte(
    name : string,
    value : NBTStructure.Byte
  ) {
    if(nameToLong(name, 0xFFFF)) {
      throw new Error(`Name "${name}" is too long (max length: 32)`);
    }
    this.nbtData[name] = value;

    return this;
  }

  public setShort(
    name : string,
    value : NBTStructure.Short
  ) {
    return this;
  }

  public setInt(name : string) {
    return this;
  }
  
  public build() {
    return this.nbtData;
  }
}


const nbt = new NBTBuilder("root")
  .setByte('byte', 15);
