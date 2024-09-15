const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

let n = +input[0];
let k = +input[1];
let arr = [];

// 1~n 배열 생성
for (let i = 1; i < n + 1; i++) {
  arr.push(i);
}

let result = [];
let count = 1;
// count는 result에 push되는 수가 생길 때마다 증가

for (let i = 0; i < n * k; i++) {
  // k의 배수인 index의 수를 제외하고는 arr에 push
  if (i !== count * k - 1) {
    arr.push(arr[i]);
  }
  // k의 배수인 index의 수를 result에 push
  else {
    result.push(arr[count * k - 1]);
    count++;
  }
}

// 맨 앞자리 수 제외 숫자 앞 공백 추가
for (let i = 0; i < result.length; i++) {
  if (i > 0) {
    result[i] = " " + result[i];
  }
}

console.log(`<${result}>`);

// queue
