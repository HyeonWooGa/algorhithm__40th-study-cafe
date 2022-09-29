const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

numbers.sort((a, b) => a - b).forEach((num) => console.log(num));
