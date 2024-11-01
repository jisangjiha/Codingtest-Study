const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
let input = [];
let sum = 0;
let n, m, firstL, firstR, secondL, secondR;
let arr = [];
let answer = 0;

rl.on("line", (line) => {
  if (index === 0) {
    [n, m] = line.split(" ").map(Number);
    arr = new Array(n).fill(0);
    index++;
  } else if (index < n + 1) {
    for (let i = 0; i < m; i++) {
      if (+line.split(" ")[i] === 1) {
        sum++;
      }
    }
    input.push(sum);
    index++;
    sum = 0;
  } else if (index === n + 1) {
    [firstL, firstR] = line.split(" ").map(Number);
    index++;
  } else {
    [secondL, secondR] = line.split(" ").map(Number);
  }
}).on("close", () => {
  for (let i = firstL; i < firstR + 1; i++) {
    arr[i - 1] = arr[i - 1] + 1;
  }

  for (let i = secondL; i < secondR + 1; i++) {
    arr[i - 1] = arr[i - 1] + 1;
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] > arr[i]) {
      answer = answer + (input[i] - arr[i]);
    }
  }

  console.log(answer);
});
