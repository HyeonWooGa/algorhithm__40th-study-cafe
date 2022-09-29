const fs = require("fs");

const [n, ...users] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const userArr = users.map((user) => user.split(" "));

let ans = "";

userArr
  .sort((a, b) => a[0] - b[0])
  .forEach((user) => (ans += `${user[0]} ${user[1]}\n`));

console.log(ans);
