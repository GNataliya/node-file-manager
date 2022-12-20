import * as path from 'path';
import { fileURLToPath } from 'url';
import { cwd } from 'process';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


export const currentDirMessage = () => {
    const current_dir = cwd();
    console.log(`You are currently in ${current_dir}.`);
}