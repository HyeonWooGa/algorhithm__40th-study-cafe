const fs = require("fs");
const [H, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (M - 45 >= 0) {
  console.log(`${H} ${M - 45}`);
} else {
  H === 0
    ? console.log(`23 ${60 + (M - 45)}`)
    : console.log(`${H - 1} ${60 + (M - 45)}`);
}
