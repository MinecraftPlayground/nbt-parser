import type { NBT } from "./nbt/index.ts";

const data : NBT.Data = {
  name: "test",
  myList: [1, 2, 3],
  myOtherList: [
    {
      '': 1
    },
    {
      '': 1,
      a: []
    },
    {
      b: {}
    },
    {}
  ]
}
