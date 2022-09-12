const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = ["2", "1 1", "9 8"];

for (let i = 1; i <= Number(input[0]); i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
