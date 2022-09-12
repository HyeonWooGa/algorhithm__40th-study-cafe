const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((str) => {
  console.log(
    str
      .split(" ")
      .map(Number)
      .reduce((acc, cur) => acc + cur)
  );
});
