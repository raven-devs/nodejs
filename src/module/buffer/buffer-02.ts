// npx ts-node src/module/buffer/buffer-02.ts

/**
 * A binary stream is a collection of large amounts of binary data. Due to their massive size, binary streams are not sent together. Instead, they are broken into smaller pieces before sending.

When the data processing unit cannot accept any more data streams, excess data is stored in a buffer until the data processing unit is ready to receive more data.

Node.js servers most often need to read and write to the filesystem and, of course, files are stored in binaries. Node.js also deals with TCP streams, which secure connections to receivers before sending binary data in small chunks.

Streams of data being sent to the receiver need to be stored somewhere until the receiver is ready to take in more chunks of data for processing. This is where the Node.js buffer class comes into play. It handles and stores binary data outside of the V8 engine.
 */

import { Buffer } from 'node:buffer';

function main() {
  // creates a new buffer of any size
  const buf = Buffer.alloc(20);
  console.log({ buf });

  // writes a string to the buffer, which can be useful when you need to stream strings in the form of buffers
  const valueLength = buf.write('Hi, there!');
  console.log({ valueLength });

  const length = buf.length;
  console.log({ length });

  // length of a buffer object
  const bufLength = Buffer.byteLength(buf);
  console.log({ bufLength });

  const buf1 = Buffer.from('xyz');
  const buf2 = Buffer.from('xyz');
  const compareResult = Buffer.compare(buf1, buf2);
  console.log({ compareResult });

  const bufJoined = Buffer.concat([buf1, buf2]);
  console.log({ bufJoined });

  const includes = bufJoined.includes('yz');
  console.log({ includes });

  const json = bufJoined.toJSON();
  console.log({ json });

  for (const value of buf2) {
    console.log({ value });
  }
  for (const entry of buf2.entries()) {
    console.log({ entry });
  }

  for (const value of buf2.values()) {
    console.log({ value });
  }

  for (const key of buf2.keys()) {
    console.log({ key });
  }
}

main();
