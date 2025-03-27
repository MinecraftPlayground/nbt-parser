import { BinaryReader } from 'jsr:@typescriptplayground/binary-reader'
import { tagTypes } from "../tag_type.ts";
import { getTagName } from "./get_tag_name.ts";

function parser(nbtData : any, reader : BinaryReader) : unknown {


  const type = reader.readUint8()
  const tagName = getTagName(reader)

  switch(type) {
    case tagTypes.BYTE: {
      console.log('reading BYTE')

      nbtData[tagName] = reader.readInt8()

      break;
    }

    case tagTypes.BYTE_ARRAY: {
      console.log('reading BYTE_ARRAY')

      const arrayLength = reader.readUint32();
      nbtData[tagName] = new Array(arrayLength).fill(0).map(() => reader.readInt8());

      break;
    }

    case tagTypes.DOUBLE: {
      console.log('reading DOUBLE')

      nbtData[tagName] = reader.readFloat64();

      break;
    }

    case tagTypes.FLOAT: {
      console.log('reading FLOAT')

      nbtData[tagName] = reader.readFloat32();

      break;
    }

    case tagTypes.INT: {
      console.log('reading INT')

      nbtData[tagName] = reader.readUint32();

      break;
    }

    case tagTypes.INT_ARRAY: {
      console.log('reading INT_ARRAY')
      
      const arrayLength = reader.readUint32();      
      nbtData[tagName] = new Array(arrayLength).fill(0).map(() => reader.readUint64());

      break;
    }

    case tagTypes.LONG: {
      console.log('reading Byte')

      nbtData[tagName] = reader.readUint64();

      break;
    }

    case tagTypes.LONG_ARRAY: {
      console.log('reading LONG_ARRAY')
      
      const arrayLength = reader.readUint32();
      nbtData[tagName] = new Array(arrayLength).fill(0).map(() => reader.readUint64());

      break;
    }

    case tagTypes.SHORT: {
      console.log('reading SHORT')
      
      nbtData[tagName] = reader.readUint16();

      break;
    }

    case tagTypes.STRING: {
      console.log('reading STRING')
      
      const stringLength = reader.readUint16();
      nbtData[tagName] = new TextDecoder().decode(reader.read(stringLength))

      break;
    }

    case tagTypes.COMPOUND: {
      console.log('reading COMPOUND')

      nbtData[tagName] = parser({}, reader);
      break;
    }

    default: {
      console.log('reading Unknown', type, tagName);
      
      break;
    }
  }

  if(reader.bufferLeft.byteLength != 0) {
    parser(nbtData, reader);
  }

  return nbtData;
}

export function parse(data : ArrayBuffer) {
  return parser({}, new BinaryReader(data));
}

