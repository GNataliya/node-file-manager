import { chdir } from 'process';
import { currentDirMessage } from '../utils.js';

export const upCmnd =  async () => {

  try {
    chdir('..')
    currentDirMessage();
  } catch (err) {
    console.error('Operation failed');
  }

}