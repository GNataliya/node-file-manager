import { writeFile } from 'fs/promises';
import * as path from 'path';
import { __dirname, currentDirMessage } from '../utils.js';


export const addFile = async () => {

    const filePath = path.join(__dirname, 'newFile');
    
    try {
        await writeFile(filePath, ' ', { flag: 'wx' });
        currentDirMessage();
    } catch (err) {
        throw new Error('FS operation failed'); 
    }
};

