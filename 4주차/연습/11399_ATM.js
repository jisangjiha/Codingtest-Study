//그리디
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = +input[0];
let time = input[1].split(" ");

//오름차순으로 정렬하여 누적합 구하기
time.sort((a, b) => a - b);

let prev = 0;
let answer = 0;
for (let i = 0; i < time.length; i++) {
  prev += time[i];
  answer += prev;
}
// result += time[i] * 나온 갯수 => 이렇게하면 변수 한 개

console.log(answer);

// sore() 함수 대신 for문으로 작성해봤는데
// 작동 안 함 > if문 수정 필요함 : if (+time[i] < +time[j])
/**
let temp = 0;
for (let i = 0; i < time.length; i++) {
  for (let j = 0; j < time.length - 1; j++) {
    if (time[i] < time[j]) {
      temp = +time[i];
      time[i] = +time[j];
      time[j] = temp;
    }
  }
}
*/
