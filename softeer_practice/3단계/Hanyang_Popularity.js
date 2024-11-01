const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
let n = 0;
let arr = [];
let popularity = 0;

rl.on("line", (line) => {
  if (index === 0) {
    n = +line;
    index++;
  } else {
    arr.push(line.split(" ").map(Number));
  }
});

rl.on("close", () => {
  for (let i = 0; i < n; i++) {
    if (Math.abs(arr[i][0] - popularity) <= arr[i][1]) {
      popularity++;
    }
  }
  console.log(popularity);
});
