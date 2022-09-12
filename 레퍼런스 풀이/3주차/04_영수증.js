// 문제 : 영수증이 맞는지 확인하는 문제

// 입력 : 1) 총액 2) 물건의 종류 3) 각 물건의 가격과 갯수

// 출력 : "Yes" | "No"

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const totalReceipt = Number(input.shift()); // 영수증에 적힌 전체가격
const numOfKinds = Number(input.shift()); // 구매한 품목 종류의 갯수
let totalCalculated = 0; // 직접 계산한 전체가격

for (let i = 0; i < numOfKinds; i++) {
  const [price, amount] = input[i].split(" ").map(Number);

  totalCalculated += price * amount;
}

totalReceipt === totalCalculated ? console.log("Yes") : console.log("No");
