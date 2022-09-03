// 문제 : 윤년

// 입력 : 1) year : int, 0 < year <= 4000
// 출력 : 1 | 0

// 윤년 조건
// ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)

const fs = require("fs");

const year = Number(fs.readFileSync("/dev/stdin"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) console.log(1);
else console.log(0);
