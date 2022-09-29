const fs = require("fs");
console.log(
  fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
