import util from 'util';

const exec = util.promisify(require('child_process').exec);

/**
 * npx ts-node src/module/node/child_process/node-child-process-exec.ts
 */

const runProcesses = async () => {
  try {
    const { stdout: stdout1, stderr: stderr1 } = await exec('node --version');
    if (stderr1) {
      throw new Error(stderr1);
    }
    console.log(stdout1);

    const { stdout: stdout2, stderr: stderr2 } = await exec('npm --version');
    if (stderr2) {
      throw new Error(stderr2);
    }
    console.log(stdout2);
  } catch (error) {
    console.error(error);
  }
};

runProcesses();
