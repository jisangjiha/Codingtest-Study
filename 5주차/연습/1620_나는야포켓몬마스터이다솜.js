//해시
const fs = require("fs");
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

//const input = "26 5\nBulbasaur\nIvysaur\nVenusaur\nCharmander\nCharmeleon\nCharizard\nSquirtle\nWartortle\nBlastoise\nCaterpie\nMetapod\nButterfree\nWeedle\nKakuna\nBeedrill\nPidgey\nPidgeotto\nPidgeot\nRattata\nRaticate\nSpearow\nFearow\nEkans\nArbok\nPikachu\nRaichu\n25\nRaichu\n3\nPidgey\nKakuna".split("\n");

const n = input[0].split(" ").map(Number)[0];
const m = input[0].split(" ").map(Number)[1];

//포켓몬이 순서대로 입력된 pokemon
const pokemon = [];
//문제가 들어있는 inputArr
const inputArr = [];

for (let i = 1; i < input.length; i++) {
  if (i < n + 1) pokemon.push(input[i]);
  else inputArr.push(input[i]);
}

//1부터 시작하는 번호로 키값을 가지는 pokemonMap
const pokemonMap = new Map(pokemon.map((v, i) => [v, i + 1]));

inputArr.forEach((v) => {
  //문자면 pokemonMap에서 해당하는 키값(수)을 출력
  if (Number.isNaN(+v)) console.log(pokemonMap.get(v));
  //숫자면 pokemon[문제숫자] > 포켓몬 출력
  else console.log(pokemon[+v - 1]);
});

//단순 반복문으로 시간초과
/**
const n = input[0].split(" ").map(Number)[0];
const m = input[0].split(" ").map(Number)[1];

const pokemon = [];
for (let i = 1; i < n + 1; i++) {
  pokemon.push(input[i]);
}

const inputArr = [];
for (let i = n + 1; i < input.length; i++) {
  inputArr.push(input[i]);
}

for (let i = 0; i < inputArr.length; i++) {
  if (isNaN(inputArr[i])) {
    for (let j = 0; j < pokemon.length; j++) {
      if (inputArr[i] === pokemon[j]) {
        console.log(j + 1);
      }
    }
  } else {
    console.log(pokemon[+inputArr[i] - 1]);
  }
}
*/
