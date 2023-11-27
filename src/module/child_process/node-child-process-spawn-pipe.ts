import child_process from 'node:child_process';

/**
 * chmod -R +rwx src/module/child_process/node-child-process-spawn-pipe.ts
 * npx ts-node src/module/child_process/node-child-process-spawn-pipe.ts
 */

const options = {
  cwd: './src/module/node/child_process',
};
const npmInit = child_process.spawn('npm', ['init'], options);

process.stdin.pipe(npmInit.stdin); // pipe console input with a process input

npmInit.stdout.on('data', function (data) {
  process.stdout.write(data.toString()); // console.log
});
npmInit.stderr.on('data', function (data) {
  process.stderr.write(data.toString()); // console.error
});
npmInit.on('close', function (code) {
  if (code !== 0) {
    console.log(`process exited with code ${code}`);
  }
  process.stdout.end();
  process.stderr.end();
  process.exit(0);
});
