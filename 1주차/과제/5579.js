const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//1~30 배열 생성
let arr = [];
for (let i = 1; i < 31; i++) {
  arr.push(i);
}

//input에 있는 번호 배열에서 제외
for (let i = 0; i < 29; i++) {
  for (let j = 0; j < 31; j++) {
    if (parseInt(input[i]) === arr[j]) {
      arr.splice(j, 1);
    }
  }
}

console.log(arr[0]);
console.log(arr[1]);

//Object.
