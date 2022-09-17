const fs = require("fs");
const [subNum, scores] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = scores.split(" ").map(Number);

const max = Math.max(...arr);

const sum = arr.reduce((acc, cur) => acc + (cur / max) * 100, 0);

console.log(sum / subNum);
