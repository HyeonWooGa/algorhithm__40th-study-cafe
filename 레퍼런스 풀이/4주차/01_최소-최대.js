const fs = require("fs");
const [length, string] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = string.split(" ").map(Number);

console.log(Math.min(...array) + " " + Math.max(...array));
