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

//랜선들만 오름차순으로
input.shift();
const lines = input.map(Number).sort((a, b) => a - b);

//만들 수 있는 최대 길이 랜선 변수
let ans = 0;

let left = 0;
//제일 긴 랜선
let right = lines[k - 1];

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  //랜선의 개수를 파악하는 변수
  let count = 0;

  for (let i = 0; i < k; i++) {
    //각 랜선/mid 몫으로 개수++
    count += Math.floor(lines[i] / mid);
  }

  //count가 n보다 크면 더 큰 mid값이 필요
  //count가 n보다 작으면 더 작은 mid값이 필요
  if (count >= n) {
    if (mid > ans) ans = mid;
    else left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(ans);
