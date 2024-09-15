const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = +input[0];

let count = 0;

for (let i = 1; i < n + 1; i++) {
  let stack = [];

  // 문자열의 모든 문자 순회
  for (const char of input[i]) {
    const top = stack[stack.length - 1];

    // 바로 전 문자가 현재 문자와 다른 경우에만 push
    if (top !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    count++;
  }
}

console.log(count);

// 오빠 풀이
/**
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = +input[0];

let count = 0;

for (let i = 1; i < n + 1; i++) {
  solve(input[i]);
}

function solve(str) {
  const stack = [];
  for (const char of str) {
    const top = stack[stack.length - 1];
    if (top !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  if (stack.length === 0) count++;
  return count;
}

console.log(count);
*/

// 처음 시도했던 방법
// 같은 문자 사이에 다른 문자가 짝수 개일 때만 count++
// 예를 들어 ABBBAB, ABAB 등 처럼 홀수 개는 안됨
// 반례) AABBBAAB
/**
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = +input[0]

let arr = [];
let countA = 0;
let countB = 0;
let resultA = false;
let resultB = false;

for(let i = 1; i < n + 1; i++){
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === 'A'){
            arr.push(j)
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr.length % 2 === 0 && j % 2 === 1 && (arr[j] - arr[j - 1]) % 2 === 1){
            resultA = true;
        }
    }
    if(resultA === true){
        countA++
    }
    resultA = false;
    arr = [];
}

for(let i = 1; i < n + 1; i++){
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === 'B'){
            arr.push(j)
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr.length % 2 === 0 && j % 2 === 1 && (arr[j] - arr[j - 1]) % 2 === 1){
            resultB = true;
        }
    }
    if(resultB === true){
        countB++
    }
    resultB = false;
    arr = [];
}

if(countA > countB){
    console.log(countA)
} else console.log(countB)
 */
