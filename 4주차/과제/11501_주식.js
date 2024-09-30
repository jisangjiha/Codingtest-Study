//그리디
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "3\n3\n10 7 6\n3\n3 5 9\n5\n1 1 3 1 2".split("\n");

const t = +input.shift();
const inputArr = input.map((v) => v.split(" ").map(Number));

//뒤에서부터 하면 된다는 힌트를 가지고,,
for (let i = 0; i < 2 * t; i += 2) {
  let n = +inputArr[i][0];
  let cost = inputArr[i + 1];

  let max = cost[n - 1];
  let ans = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (cost[i] < max) {
      ans += max - cost[i];
    } else max = cost[i];
  }

  console.log(ans);
}
