const readlineSync = require('readline-sync');

const size = Number(readlineSync.question('Enter size: '));

for (let a = 0 ; a < size; a++) {
    let str = ''
    for (let b = 0; b < size; b++) {
    str += '*'
    }
    console.log(str)
}