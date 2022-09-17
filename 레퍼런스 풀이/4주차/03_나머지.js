// 1. 배열

const fs = require("fs");
const arrNum = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arrDup = arrNum.map((num) => num % 42);

const arr = [...new Set(arrDup)];

console.log(arr.length);

// 2. Set 객체

const fs = require("fs");
const arrNum = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const set = new Set();

arrNum.forEach((num) => set.add(num % 42));

console.log(set.size);
