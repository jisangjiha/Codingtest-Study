//dp
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "5\n7\n3 8\n8 1 0\n2 7 4 4\n4 5 2 6 5".split("\n");

const n = +input.shift();

const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" "));
}

if (n === 1) console.log(+arr[0][0]);
else {
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      if (arr[i][j] > arr[i][j + 1]) {
        arr[i - 1][j] = +arr[i - 1][j] + +arr[i][j];
      } else arr[i - 1][j] = +arr[i - 1][j] + +arr[i][j + 1];
    }
  }
  console.log(arr[0][0]);
}
