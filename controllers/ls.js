import { readdir } from 'fs/promises'
import { resolve } from 'path';
import { cwd } from 'process';
import { currentDirMessage } from '../utils.js';


export const lsCmnd =  async () => {

    const currentDir = resolve(cwd());

  try {
    const listFiles = await readdir(currentDir);
    console.table(listFiles);
    currentDirMessage();
  } catch (err) {
    console.error('Operation failed'); 
  }

}