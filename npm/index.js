
var chalk = require("chalk");

// var message = "Hello " + chalk.yellow("World");

var message = chalk.red('Hello', chalk.underline.bgBlue('world') + '!');
var message2 = chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
);

console.log(message);
console.log(message2);
