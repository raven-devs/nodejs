// npx ts-node src/module/buffer/buffer-01.ts

/**
 * Buffer objects are used to represent a fixed-length sequence of bytes.
 */

import { Buffer } from 'node:buffer';

function main() {
  const fromString = (data: string): Buffer => {
    return Buffer.from(data, 'utf-8');
  };

  const toString = (data: Buffer): string => {
    return data.toString('utf-8');
  };

  const fromBase64String = (data: string): Buffer => {
    return Buffer.from(data, 'base64url');
  };

  const toBase64String = (data: Buffer): string => {
    return data.toString('base64url');
  };

  const stringValue = 'Hi, there!';
  const bufferValue = fromString(stringValue);
  console.log({ bufferValue });

  const stringFromBufferValue = toString(bufferValue);
  console.log({ stringFromBufferValue });

  const base64Value = toBase64String(bufferValue);
  console.log({ base64Value });

  const bufferFromBase64Value = fromBase64String(base64Value);
  console.log({ bufferFromBase64Value });

  const stringFromBase64Value = toString(bufferFromBase64Value);
  console.log({ stringFromBase64Value });
}

main();
