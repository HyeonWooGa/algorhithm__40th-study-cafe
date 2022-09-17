const fs = require("fs");
const [length, ...strings] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

strings.forEach((str) => {
  const arr = str.split("");
  let count = 0;
  let sum = 0;

  arr.forEach((char) => {
    if (char === "O") {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  });

  console.log(sum);
});
