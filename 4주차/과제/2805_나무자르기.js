//이분탐색
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "5 20\n4 42 40 26 46".split("\n");

const n = +input[0].split(" ")[0];
const m = +input[0].split(" ")[1];
const tree = input[1].split(" ").map(Number);

let a = -Infinity;

function search(min, max, target) {
  if (min > max) return max;

  let mid = Math.floor((min + max) / 2);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (tree[i] > mid) {
      sum += tree[i] - mid;
    }
  }

  if (sum >= target) {
    //더 높은 절단기 높이
    return search(mid + 1, max, target);
  } else {
    //더 낮은 절단기 높이
    return search(min, mid - 1, target);
  }
}

let maxTreeHeight = Math.max(...tree);
console.log(search(0, maxTreeHeight, m));

// mid 잘못이해,,
/**
const n = +input[0].split(" ")[0];
const m = +input[0].split(" ")[1];
const tree = input[1].split(" ").map(Number);

tree.sort((a, b) => a - b);

function search(max, target) {
  let ans = 0;
  //값들의 중간값이 아닌, 단순 중앙값
  let mid = Math.floor(max / 2);

  for (let i = 0; i < n; i++) {
    if (arr[i] - arr[mid] > 0) {
      ans += arr[i] - arr[mid];
    }
  }

  if (sum >= target) {
    return search(mid + 1, target);
  } else {
    return search(mid - 1, target);
  }
}

console.log(search(tree[n - 1], m));
*/

// input 상수값 설정 잘못함
/**
const n = +input[0][0];
const m = +input[0][2];
 */
