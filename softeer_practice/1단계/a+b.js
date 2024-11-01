const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
let cases;
let arr = [];

rl.on("line", (input) => {
  if (index === 0) {
    cases = Number.parseInt(input);
  } else {
    const splited = input.split(" ");
    arr = Number.parseInt(splited[0]) + Number.parseInt(splited[1]);
    console.log(`Case #${index}: ${arr}`);
  }
  index++;
});

rl.on("close", () => {});

/**
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let index = 0;
let cases;
let arr = [];

rl.on('line', input => {
    if (index === 0) {
        cases = Number.parseInt(input)
    } else {
        const splited = input.split(' ');
        arr.push({
            a: Number.parseInt(splited[0]),
            b: Number.parseInt(splited[1]),
        });
    }
    index++;
})

rl.on('close',() => {
    console.log({ cases, arr })
})
*/
