const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = "";

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== undefined) {
      arr += input[j][i];
    }
  }
}

console.log(arr);

//중첩 배열 [][]
//join > undefined 안읽고 join('')
