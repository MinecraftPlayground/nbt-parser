
const tagTypes = {
  END: 0x00,
  BYTE: 0x01,
  SHORT: 0x02,
  INT: 0x03,
  LONG: 0x04,
  FLOAT: 0x05,
  DOUBLE: 0x06,
  BYTE_ARRAY: 0x07,
  STRING: 0x08,
  LIST: 0x09,
  COMPOUND: 0x0A,
  INT_ARRAY: 0x0B,
  LONG_ARRAY: 0x0C,
} as const;

/** This type represents a NBT Tag Type. */
export type TagType = typeof tagTypes[keyof typeof tagTypes];

export {tagTypes};
