//dp
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let t = +input[0];
let inputArr = input.slice(1);

let zero = 0;
let one = 0;

function fibonacci(
  n,
  memo = [
    [1, 0],
    [0, 1],
  ]
) {
  if (n === 0) return memo[0];
  if (n === 1) return memo[1];
  //memo안에 n번째 배열이 있다면 그 배열을 리턴
  if (memo[n] !== undefined) return memo[n];

  let arr1 = fibonacci(n - 1, memo);
  let arr2 = fibonacci(n - 2, memo);

  let zeroCount = arr1[0] + arr2[0];
  let oneCount = arr1[1] + arr2[1];

  memo[n] = [zeroCount, oneCount];

  return memo[n];
}

for (let i = 0; i < inputArr.length; i++) {
  zero = fibonacci(+inputArr[i])[0];
  one = fibonacci(+inputArr[i])[1];
  console.log(`${zero} ${one}`);
}

// 시간 초과
/**
const t = +input[0];

let zero = 0;
let one = 0;

function fibonacci(n) {
  if (n === 0) {
    zero++;
  } else if (n === 1) {
    one++;
  } else fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 1; i < t + 1; i++) {
  fibonacci(+input[i]);
  console.log(`${zero} ${one}`);
  zero = 0;
  one = 0;
}
*/
