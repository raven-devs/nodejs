import child_process from 'node:child_process';

/**
 * npx ts-node src/module/node/child_process/node-child-process-spawn.ts
 */

for (let i = 0; i < 3; i++) {
  const workerProcess = child_process.spawn('node', [
    'src/module/node/child_process/node-child-process.js',
    i.toString(),
  ]);

  workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
  workerProcess.stderr.on('data', function (data) {
    console.error('stderr: ' + data);
  });
  workerProcess.on('close', function (code) {
    console.log(`child process exited with code ${code}`);
  });
}
