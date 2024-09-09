const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = parseInt(input[0]);

let ans = 0; //사이클 횟수
let num = N; //사이클마다 변동되는 수

while (true) {
  let a = Math.floor(num / 10);
  let b = num % 10;
  num = b * 10 + (parseInt(a + b) % 10);
  ans++;
  if (num === N) break;
}

console.log(ans);

//구조분해할당
