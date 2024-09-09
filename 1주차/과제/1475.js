const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");

//0~9 배열 생성
let arr = new Array(10).fill(0);

//input 9 -> 6 변경
for (let i = 0; i < input.length; i++) {
  if (+input[i] === 9) {
    input.splice(i, 1, 6);
  }
}

//중복되는 숫자만큼 해당하는 배열 +1
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < 10; j++) {
    if (+input[i] === j) {
      arr.splice(j, 1, arr[j] + 1);
    }
  }
}

//최댓값으로 구하기(단, 6===9이므로, /2 (반올림))
let max = 0;

for (let i = 0; i < 10; i++) {
  if (arr[i] > max && i === 6) {
    max = Math.round(arr[i] / 2);
  } else if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

//map
//Number.max([...])
