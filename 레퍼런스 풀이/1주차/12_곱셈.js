const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [b0, b1, b2] = b.split("");

const temp1 = a * b2;
const temp2 = a * b1;
const temp3 = a * b0;
const sum = temp1 + Number(`${temp2}0`) + Number(`${temp3}00`);

console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`);
