import type { List } from "./nbt/complex/index.ts";

const listA : List = [{'': {}}] // Error
const listB : List = [{'b': {}}] // No Error
const listC : List = [{'': []}] // No Error
const listD : List = [{'': undefined}] // Error

