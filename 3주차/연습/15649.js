// 블로그 참고_정답

const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

const n = +input[0];
const m = +input[1];

const seq = [...Array(m)].fill(0);
const visited = [...Array(n)].fill(false);
let result = "";

function dfs(k) {
  if (k === m) {
    const arr = [];
    for (let i = 0; i < m; i++) {
      arr.push(seq[i]);
    }
    return (result += `${arr.join(" ")}\n`);
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      seq[k] = i;
      visited[i] = true;
      dfs(k + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(result);
