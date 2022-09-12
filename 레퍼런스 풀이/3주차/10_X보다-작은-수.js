const fs = require("fs");

const [numbersFor, numbersTest] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [length, target] = numbersFor.split(" ").map(Number);

const numbersTestArray = numbersTest.split(" ").map(Number);

const numbersBelow = numbersTestArray.filter((el) => el < target).join(" ");

console.log(numbersBelow);
