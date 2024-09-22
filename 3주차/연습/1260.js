// 블로그 참고_정답

//const input = "4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4".split("\n");

const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("n");

const n = +input[0][0]; //정점
const m = +input[0][2]; //간선
const v = +input[0][4];

const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  let [row, column] = input[i].split(" ").map(Number);
  graph[row][column] = 1;
  graph[column][row] = 1;
}

const DFS_visited = new Array(n + 1).fill(false);
const DFS_answer = [];
const BFS_visited = new Array(n + 1).fill(false);
const BFS_answer = [];

function DFS(v) {
  DFS_visited[v] = true;
  DFS_answer.push(v);
  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && DFS_visited[i] === false) {
      DFS(i);
    }
  }
}

function BFS(v) {
  const queue = [];
  BFS_visited[v] = true;
  BFS_answer.push(v);
  queue.push(v);

  while (queue.length !== 0) {
    let dequeue = queue.shift();
    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && BFS_visited[i] === false) {
        BFS_visited[i] = true;
        queue.push(i);
        BFS_answer.push(i);
      }
    }
  }
}

DFS(v);
BFS(v);

console.log(DFS_answer.join(" "));
console.log(BFS_answer.join(" "));
