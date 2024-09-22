const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const inputArr = input.map((v) => v.split(" ").map(Number));

function countPaper(n) {
  let white = 0;
  let blue = 0;

  function recursion(x, y, n) {
    let total = 0;

    //white는 0, blue는 1로 표기하기 때문에
    //n*n 사이즈의 종이가 모두 같은 색이라면, 모든 값을 더해 white, blue 종이 카운트
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        total += inputArr[y + j][x + i];
      }
    }

    if (total === 0) white++;
    else if (total === n * n) blue++;
    //색종이가 섞여있다면, 4등분하여 각 1,2,3,4분면을 확인
    else {
      n /= 2;
      recursion(x, y, n);
      recursion(x, y + n, n);
      recursion(x + n, y, n);
      recursion(x + n, y + n, n);
    }
  }

  recursion(0, 0, n);

  console.log(`${white}\n${blue}`);
}

countPaper(n);

// parameter 직접 변경 x ->

/**
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const half = n / 2;

const inputArr = input.map((v) => v.split(" ").map(Number));

let white = 0;
let blue = 0;

function quadrant(r, c, n) {
  //isFilledSameColor가 true인 경우(하나의 종이) 컬러 구분
  if (isFilledSameColor(r, c, n)) {
    if (inputArr[r][c] === 1) blue++;
    else white++;
    return;
  }

  //isFilledSameColor가 false인 경우 4등분해서 확인
  //좌측 상단을 어디에 두냐에 따라 1,2,3,4분면으로 분할
  quadrant(r, c, half);
  quadrant(r, c + half, half);
  quadrant(r + half, c, half);
  quadrant(r + half, c + half, half);
}

function isFilledSameColor(r, c, n) {
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      //좌측 상단의 값과 [i][j]까지의 값이 모두 같아야만 return true
      if (inputArr[r][c] !== inputArr[i][j]) return false;
    }
  }
  return true;
}

quadrant(0, 0, n);

console.log(`${white}\n${blue}`);
*/

/** 반 나누는 기준이 가운데가 되야할까? -> 십자가 모양으로 색깔이 나뉜다면 의미 없음
for(let i = 0; i < n; i++){
    if(inputArr[i][n - 1] !== inputArr[i][n] || inputArr[n - 1][i] !== inputArr[n][i]){
        n = n / 2;
    } else{
    }
}
 */
