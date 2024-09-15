const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = +input.length;

// 마지막 온점으로 끝나는 줄은 제외하기 위해 n-1
for (let i = 0; i < n - 1; i++) {
  const stack = [];

  for (const char of input[i]) {
    const top = stack[stack.length - 1];

    // 괄호가 아닌 문자들은 계산에서 제외
    if (char === "(" || char === ")" || char === "[" || char === "]") {
      // 바로 전 문자가 여는 괄호이고, 현재 문자가 닫는 괄로일 경우만 pop
      if (top === "(" && char === ")") {
        stack.pop();
      } else if (top === "[" && char === "]") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  if (stack.length === 0) {
    console.log("yes");
  } else console.log("no");
}

// 정규표현식 RegExp
// .at method
