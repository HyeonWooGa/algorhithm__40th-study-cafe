const fs = require("fs");
const [top, bottom] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, cutLine] = top.split(" ").map(Number);

const students = bottom
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(students[cutLine - 1]);
