const fs = require("fs");

let num = Number(fs.readFileSync("/dev/stdin"));

const target = num;
let count = 0;

while (target !== num || count === 0) {
  let a = num % 10;
  let b = Math.floor(num / 10);
  let c = (a + b) % 10;
  count++;

  num = Number(a.toString() + c.toString());
}

console.log(count);
