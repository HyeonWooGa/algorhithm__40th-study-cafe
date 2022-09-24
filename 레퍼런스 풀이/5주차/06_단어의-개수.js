const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

if (arr[0] === "") console.log(0);
else console.log(arr.length);
