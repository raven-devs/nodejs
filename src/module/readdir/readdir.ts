import { readdir } from 'fs/promises';

/**
 * npx ts-node src/module/readdir/readdir.ts
 */

const getDirectories = async (source: string) => {
  return (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const run = async () => {
  const directories = await getDirectories(process.cwd());
  console.log({ directories });
};

run();
