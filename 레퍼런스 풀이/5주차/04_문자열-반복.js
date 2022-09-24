const fs = require("fs");
const [n, ...testCases] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

testCases
  .map((str) => str.split(" "))
  .forEach((arr) => {
    let ans = "";

    arr[1].split("").forEach((char) => {
      for (let i = 0; i < Number(arr[0]); i++) {
        ans += char;
      }
    });

    console.log(ans);
  });
