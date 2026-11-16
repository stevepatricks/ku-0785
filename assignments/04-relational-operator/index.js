const readline = require('readline-sync');

const firstNum = Number(readline.question('Enter first number:'));
const secondNum = Number(readline.question('Enter second number:'));

const sum = firstNum + secondNum

console.log('what is ' + firstNum + ' + ' + secondNum + '? ' + sum)

console.log(firstNum + ' + ' + secondNum + ' = ' + sum + ' is ' + ' ' + (sum===firstNum + secondNum) )