const fs = require("fs");
const numbers = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((str) => str.split(""))
  .map((arr1) => arr1.reverse())
  .map((arr2) => arr2.join(""))
  .map(Number);

console.log(Math.max(...numbers));
