const readline = require('readline-sync');

const onekilo = 1.60934;

const mile = Number(readline.question('Enter miles: '));

const milToKilo = mile * onekilo

console.log('\n'+ mile + ' miles is equal to ' + milToKilo + ' kilometers')