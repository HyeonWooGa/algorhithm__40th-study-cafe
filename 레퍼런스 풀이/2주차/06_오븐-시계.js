const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0].split(" ")[0]);
const B = Number(input[0].split(" ")[1]);
const C = Number(input[1]);

const hours = parseInt(C / 60);
const minutes = parseInt(C % 60);

if (B + minutes >= 60) {
  A + hours + 1 >= 24
    ? console.log(`${A + hours + 1 - 24} ${B + minutes - 60}`)
    : console.log(`${A + hours + 1} ${B + minutes - 60}`);
} else {
  A + hours >= 24
    ? console.log(`${A + hours - 24} ${B + minutes}`)
    : console.log(`${A + hours} ${B + minutes}`);
}
