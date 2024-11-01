const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let countA = 0;
let countD = 0;

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  for (let i = 0; i < input.length; i++) {
    if (+input[i] === i + 1) {
      countA++;
    } else if (+input[i] === 8 - i) {
      countD++;
    }
  }

  if (countA === 8) {
    console.log("ascending");
  } else if (countD === 8) {
    console.log("descending");
  } else console.log("mixed");
});
