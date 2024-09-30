//이분탐색
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "5\n6 3 2 10 -10\n8\n10 9 -5 2 3 4 5 -10".split("\n");

const n = +input[0];
const card = input[1].split(" ").map(Number);
const m = +input[2];
const num = input[3].split(" ").map(Number);

card.sort((a, b) => a - b);

let ans = [];

//이분탐색으로 card의 mid index 기준으로 L/R 하나씩 늘려가며 서치
function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

for (let i = 0; i < num.length; i++) {
  if (search(card, num[i])) {
    ans.push(1);
  } else {
    ans.push(0);
  }
}

console.log(ans.join(" "));

// 단순 includes() 함수 > 시간초과
/**
const n = input[0];
const card = input[1].split(" ").map(Number);

const m = input[2];
const num = input[3].split(" ").map(Number);

let ans = [];

for (let i = 0; i < num.length; i++) {
  if (card.includes(num[i]) === true) {
    ans.push(1);
  } else ans.push(0);
}

console.log(ans.join(" "));
*/
