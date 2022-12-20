import { chdir } from 'process';
import { currentDirMessage } from '../utils.js';

export const cdCmnd = async ([pathToDir]) => {
    
  try {
    chdir(pathToDir);
    currentDirMessage();
  } catch (err) {
    console.error('Operation failed');
  }

}
