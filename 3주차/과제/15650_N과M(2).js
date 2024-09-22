const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

let n = +input[0];
let m = +input[1];

//수열 크기와 동일한 0 배열 생성
const arr = Array.from({ length: m }, () => 0);

function solve(num1, num2) {
  if (num2 !== m) {
    for (let i = num1; i <= n; i++) {
      arr[num2] = i;
      solve(i + 1, num2 + 1);
    }
  } else {
    //답안 형식상 공백 필요
    console.log(arr.join(" "));
  }
}

solve(1, 0);
