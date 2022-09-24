const fs = require("fs");
const word = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("");

const obj = {};

word.forEach((char) => {
  obj[char] = obj[char] ? obj[char] + 1 : 1;
});

const keys = Object.keys(obj);
const values = Object.values(obj);

const maxNum = Math.max(...values);

const ans =
  values.indexOf(maxNum) === values.lastIndexOf(maxNum)
    ? keys[values.indexOf(maxNum)]
    : "?";

console.log(ans);
