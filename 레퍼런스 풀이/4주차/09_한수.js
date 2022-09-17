const fs = require("fs");
const number = Number(fs.readFileSync("/dev/stdin"));

const hanNumbers = new Set();

for (let num = 1; num <= number; num++) {
  if (num < 100) {
    hanNumbers.add(num);
  } else {
    const str = num + "";
    const differ1 = Number(str[2]) - Number(str[1]);
    const differ2 = Number(str[1]) - Number(str[0]);

    if (differ1 === differ2) {
      hanNumbers.add(num);
    }
  }
}

console.log(hanNumbers.size);
