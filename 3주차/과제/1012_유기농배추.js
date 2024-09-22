const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = +input.shift();

const inputArr = input.map((v) => v.split(" ").map(Number));

//[row,col] => 상하좌우
const row = [0, 0, -1, 1];
const col = [-1, 1, 0, 0];

function dfs(j, k, n, m) {
  // 방문한(지나간) 경우 false -> true
  visited[j][k] = true;

  for (let i = 0; i < 4; i++) {
    newJ = j + col[i];
    newK = k + row[i];

    //1. 큰 틀에서 벗어나지 않는 경우(배열을 사각형으로 보았을 떄 외각으로 벗어나지 않는 경우)
    if (newJ >= 0 && newJ < n && newK >= 0 && newK < m) {
      //2. 원래 위치의 각 상/하/좌/우에 배추가 있고, 지나가지 않은 경우를 찾아 false -> true로 바꿔주는 작업
      //   dfs 함수를 통해 하나의 true 덩어리를 처리하게 됨
      if (farm[newJ][newK] === 1 && visited[newJ][newK] === false) {
        dfs(newJ, newK, n, m);
      }
    }
  }
}

let farm = [];
let visited = [];

for (let i = 0; i < t; i++) {
  let answer = 0;

  let [m, n, k] = inputArr.shift();
  farm = Array.from(Array(n), () => new Array(m).fill(0));
  visited = Array.from(Array(n), () => new Array(m).fill(false));

  // 한 가지 테스트케이스 내에서 (k가 끝날 때까지) inputArr에 있는 배열일 경우 farm에 1 => 배추가 심어져 있는 배열 생성
  while (k > 0) {
    k--;
    const [x, y] = inputArr.shift();
    farm[y][x] = 1;
  }

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (farm[j][k] === 1 && visited[j][k] === false) {
        dfs(j, k, n, m);
        // 하나의 덩어리마다 answer++
        answer++;
      }
    }
  }
  console.log(answer);
}
