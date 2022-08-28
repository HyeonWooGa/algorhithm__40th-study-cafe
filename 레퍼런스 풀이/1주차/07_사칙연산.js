const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  console.log(input[0] + input[1]);
  console.log(input[0] - input[1]);
  console.log(input[0] * input[1]);
  console.log(Math.floor(input[0] / input[1]));
  console.log(input[0] % input[1]);
  process.exit();
});
