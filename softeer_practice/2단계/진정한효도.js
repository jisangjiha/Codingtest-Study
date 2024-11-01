const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let costArr = [];
let min = Infinity;

rl.on("line", (line) => {
  arr.push(line.split(" ").map(Number));
}).on("close", () => {
  for (let i = 0; i < 3; i++) {
    let cost1 = 0,
      cost2 = 0,
      cost3 = 0;
    for (let j = 0; j < 3; j++) {
      cost1 += Math.abs(arr[i][j] - 1);
      cost2 += Math.abs(arr[i][j] - 2);
      cost3 += Math.abs(arr[i][j] - 3);
    }
    costArr.push(cost1);
    costArr.push(cost2);
    costArr.push(cost3);
  }

  for (let i = 0; i < 3; i++) {
    let cost1 = 0,
      cost2 = 0,
      cost3 = 0;
    for (let j = 0; j < 3; j++) {
      cost1 += Math.abs(arr[j][i] - 1);
      cost2 += Math.abs(arr[j][i] - 2);
      cost3 += Math.abs(arr[j][i] - 3);
    }
    costArr.push(cost1);
    costArr.push(cost2);
    costArr.push(cost3);
  }

  console.log(Math.min(...costArr));
});

//오답
/**
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let row = [];
let column = [];
let sameH = false;
let cost = Infinity;

rl.on("line", (line) => {
  row.push(line.split(" ").map(Number));

  for (let i = 0; i < 3; i++) {
    column[i] = new Array(3);
  }
}).on("close", () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      column[i][j] = row[j][i];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (row[i][0] === row[i][1] && row[i][1] === row[i][2]) {
      sameH = true;
    } else if (column[i][0] === column[i][1] && column[i][1] === column[i][2]) {
      sameH = true;
    } else {
      row[i].sort();
      if (cost > row[i][2] - row[i][0] + (row[i][1] - row[i][0])) {
        cost = row[i][2] - row[i][0] + (row[i][1] - row[i][0]);
      }
      column[i].sort();
      if (cost > column[i][2] - column[i][0] + (column[i][1] - column[i][0])) {
        cost = column[i][2] - column[i][0] + (column[i][1] - column[i][0]);
      }
    }
  }

  if (sameH === true) {
    console.log(0);
  } else console.log(cost);
});
 */
