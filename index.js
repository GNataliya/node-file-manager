import { argv, stdin, stdout, exit } from 'process';
import * as readline from 'readline';
import { currentDirMessage } from './utils.js';
import { upCmnd } from './controllers/up.js';
import { lsCmnd } from './controllers/ls.js';
import { cdCmnd } from './controllers/cd.js';

import { addFile } from './controllers/add.js';

const user = argv[2];
const userName = user.split('=')[1];

const userInvitation = !user || !userName ? 
console.log('Please, enter correct command including your name') : 
console.log(`Welcome to the File Manager, ${userName}!`);
currentDirMessage();


const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout 
});


rl.on('line', (line) => {

    const getLine = line.toString().trim();
    const textErr = console.log('Error. Try enter correct command.');

    getLine === 'up' ? upCmnd() : textErr;
    getLine === 'ls' ? lsCmnd() : textErr;
    getLine === 'cd' ? cdCmnd() : textErr;
    
    
    getLine.indexOf('add') === 0 ? addFile() : textErr;


    if (getLine === '.exit') { 
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
        rl.close();
    }

});


rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    rl.close();
});

