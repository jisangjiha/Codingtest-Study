//이분탐색
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "4 11\n802\n743\n457\n539".split("\n");

const k = input[0].split(" ")[0];
const n = input[0].split(" ")[1];

input.shift();
const lines = input.map(Number).sort((a, b) => a - b);

let ans = 0;
let left = 0;
let right = lines[k - 1];

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 0; i < k; i++) {
    count += Math.floor(lines[i] / mid);
  }

  if (count >= n) {
    if (mid > ans) ans = mid;
    else left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(ans);
