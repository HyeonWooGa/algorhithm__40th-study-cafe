const fs = require("fs");

const [n, coordinates] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const obj = {};

const arr = coordinates.split(" ").map(Number);

[...new Set(arr)]
  .sort((a, b) => a - b)
  .forEach((item, idx) => (obj[item] = idx));

let ans = "";

arr.forEach((key) => (ans += `${obj[key]} `));

console.log(ans.trim());
