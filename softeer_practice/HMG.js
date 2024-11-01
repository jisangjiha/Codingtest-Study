const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = "";
let ans = "";

rl.on("line", (line) => {
  lines = line;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "-" && lines[i] === lines[i].toUpperCase()) {
      ans += lines[i];
    }
  }
}).on("close", () => {
  console.log(ans);
  process.exit(0);
});
