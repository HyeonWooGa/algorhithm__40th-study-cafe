const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let ans = "";

numbers.sort((a, b) => a - b).forEach((num) => (ans += `${num}\n`));

console.log(ans);
