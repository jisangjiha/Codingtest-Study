//dp
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "6\n6\n10\n13\n9\n8\n1".split("\n");

const n = +input.shift();
const wine = input.map(Number);

const dp = new Array(n).fill(0);

dp[1] = wine[0];
dp[2] = wine[0] + wine[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    //-2전에 x
    dp[i - 3] + wine[i - 2] + wine[i - 1],
    //직전에 x
    dp[i - 2] + wine[i - 1],
    //본인이 x
    dp[i - 1]
  );
}

console.log(dp[n]);

/**
const n = +input.shift();
const wine = input.map(Number);

let ans = 0;
let ans2 = 0;
let ans3 = 0;

if (n === 1) console.log((wine[0]));
else if (n === 2) console.log((wine[0] + wine[1]));
else {
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 !== 1) {
      ans += wine[i];
    }
    if ((i + 1) % 3 !== 2) {
      ans2 += wine[i];
    }
    if ((i + 1) % 3 !== 0) {
      ans3 += wine[i];
    }
  }
  if (ans > ans2 && ans > ans3) console.log(ans);
  else if (ans2 > ans && ans2 > ans3) console.log(ans2);
  else console.log(ans3);
}
*/
