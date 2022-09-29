const fs = require("fs");

const [n, ...stringsDup] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

stringsDup.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b);
  return a.length - b.length;
});

const strings = new Set(stringsDup);

let ans = "";

strings.forEach((str) => (ans += `${str}\n`));

console.log(ans);
