const fs = require("fs");
let [n, ...coordinates] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

coordinates = coordinates
  .map((coordinate) => coordinate.split(" ").map(Number))
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

let str = "";

coordinates.forEach((coordinate) => {
  str += `${coordinate[0]} ${coordinate[1]}\n`;
});

console.log(str);
