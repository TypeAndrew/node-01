const contacts = require('./contacts');
//import contacts from '../contacts.js';

// index.js

//const { argv } = yargs(process.argv);
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
console.log('-----');
//console.log(argv);
// TODO: рефакторить
async function invokeAction({ _ }) {
    switch (_[0]) {
        case 'list':
            console.log('--get--');
            console.log(await contacts.listContacts());

            break;

        case "get":
            console.log('--get--');
            console.log(await contacts.getContactById(_[1]));
            break;

        case "add":
            // ... name email phone
            break;

        case "remove":
            // ... id
            break;

        default:
            console.log(_[0]);
            console.warn("\x1B[31m Unknown action type!");
    }
}

console.log(argv);
invokeAction(argv);