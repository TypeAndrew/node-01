const contacts = require('./contacts');

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const args = {action: argv._[0],name: argv._[1],id: argv._[1],email: argv._[2],phone:argv._[3]};

async function invokeAction({ action, id, name, email, phone }) {
   
    switch (action) {
        case 'list':
            console.log('--list--');
            console.log(await contacts.listContacts());

            break;

        case "get":
            console.log('--get--');
            console.log(await contacts.getContactById(id));
            break;

        case "add":
            /*console.log('--add--');
            const name = _[1];
            const email = _[2];
            const phone = _[3];*/
           contacts.addContact(name,email,phone);
            break;

        case "remove":
            console.log('--del--');
            
            await contacts.removeContact(id);
            
            break;

        default:
            //console.log(_[0]);
            console.log('First argument - action not found');
            console.warn("\x1B[31m Unknown action type!");
    }
}

console.log(args);
invokeAction(args);