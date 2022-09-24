const fs = require("fs");
const [n, numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const total = numbers.split("").reduce((acc, cur) => {
  return acc + Number(cur);
}, 0);

console.log(total);
