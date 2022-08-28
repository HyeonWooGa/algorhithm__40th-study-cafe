const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [1, 1, 2, 2, 2, 8];
let ans = "";

for (let i = 0; i < arr.length; i++) {
  ans += `${arr[i] - input[i]} `;
}

console.log(ans.trim());
