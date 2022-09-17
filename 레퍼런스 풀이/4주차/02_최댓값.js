const fs = require("fs");
const array = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...array);

console.log(max + "\n" + (array.indexOf(max) + 1));
