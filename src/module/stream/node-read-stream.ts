import fs from 'fs';

/**
 * npx ts-node src/module/stream/node-read-stream.ts
 */

const path = './src/module/node/stream/node-read-stream.ts';
const readStream = fs.createReadStream(path);

let lines = 0;
readStream.on('data', function (buf: string | Buffer) {
  lines += buf.toString().match(/\n/g)!.length;
});

readStream.on('end', function () {
  console.log(lines);
});
