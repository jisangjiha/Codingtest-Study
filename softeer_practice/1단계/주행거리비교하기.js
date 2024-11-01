const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let [a, b] = line.split(" ").map(Number);
  if (a > b) {
    console.log("A");
  } else if (a < b) {
    console.log("B");
  } else console.log("same");
}).on("close", () => {});
