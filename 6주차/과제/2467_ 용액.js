//이분탐색
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "5\n-99 -2 -1 4 98".split("\n");

const n = +input[0];
let arr = input[1].split(" ").map(Number);

let abs = Infinity;
let left = 0;
let right = 0;

//index 변수
let start = 0;
let end = n - 1;

while (start < end) {
  let sum = arr[start] + arr[end];

  if (Math.abs(sum) < abs) {
    abs = Math.abs(sum);
    left = arr[start];
    right = arr[end];
  }

  //sum이 0이면 더 이상 안 봐도 되니까 break;
  //sum이 음수면 수를 키우고
  //sum이 양수면 수를 줄여보며 새로운 sum을 구해보기
  if (sum === 0) {
    break;
  } else if (sum < 0) {
    ++start;
  } else {
    --end;
  }
}

console.log(left, right);

// 절대값을 내림차순으로 정렬해서 n과 n+1의 차이가 가장 작은 것을 찾으려고 함
/** 
const n = +input[0];
const arr = input[1].split(" ").map(Number);

const absArr = arr.map(Math.abs).sort((a, b) => b - a);

let k = Infinity;
let a = 0;
let b = 0;

for (let i = 0; i < n - 1; i++) {
  if (absArr[i] - absArr[i + 1] < k) {
    k = absArr[i] - absArr[i + 1];
    if (arr.includes(absArr[i])) {
      a = absArr[i];
    } else a = -absArr[i];
    if (arr.includes(absArr[i + 1])) {
      b = absArr[i + 1];
    } else b = -absArr[i + 1];
  }
}

if (a < b) {
  console.log(a, b);
} else console.log(b, a);
*/
