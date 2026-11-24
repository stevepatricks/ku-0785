const readlineSync = require('readline-sync');

const size = Number(readlineSync.question('Enter size: '));

for (let a = 1 ; a <= size; a++) {
    let str = ''
    for (let b = 0; b < a; b++) {
    str += '*'
    }
    console.log(str)
}