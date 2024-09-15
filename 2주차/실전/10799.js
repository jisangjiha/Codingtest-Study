const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");

let stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    result += stack.length;
  } else if (input[i] === "(") {
    stack.push(input[i]);
  } else if (input[i] === ")" && input[i - 1] === "(") {
    continue;
  } else {
    stack.pop();
    result++;
  }
}

console.log(result);

/**
 * 맞긴 한데, 너무 오래 걸림 > for문 합침
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    input.splice(i, 2, "L");
  }
}

let stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    result += stack.length;
  }
  else if (input[i] === "(") {
    stack.push(input[i]);
  }  else {
    stack.pop();
    result++;
  }
}

console.log(result);
*/
