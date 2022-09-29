const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 오름차순 정렬
numbers.sort((a, b) => a - b);

// 산술평균 구하고 바로 출력
const average = Math.round(numbers.reduce((acc, cur) => acc + cur, 0) / n);
console.log(average === -0 ? 0 : average);

// 중앙값 구하고 바로 출력
const center = numbers[Math.floor(n / 2)];
console.log(center);

// 각 수의 나타난 횟수를 관리하는 객체 생성
const countObj = {};

numbers.forEach((num, i) => {
  if (countObj[num] === undefined) {
    countObj[num] = 1;
  } else {
    countObj[num] += 1;
  }
});

// 각 수의 나타난 횟수 키배열과 값배열 초기화
const keys = Object.keys(countObj).sort((a, b) => a - b);
const values = Object.values(countObj);

// 최빈값의 나타난 횟수 초기화
const maxCount = Math.max(...values);

// 최빈값이 하나가 아닌 경우와 최빈값이 하나인 경우 분기해서 출력
if (values.indexOf(maxCount) !== values.lastIndexOf(maxCount)) {
  const maxCountNumbers = [];

  keys.forEach((key) => {
    if (countObj[key] === maxCount) {
      maxCountNumbers.push(key);
    }
  });

  console.log(+maxCountNumbers[1]);
} else {
  keys.forEach((key) => {
    if (countObj[key] === maxCount) {
      console.log(+key);
    }
  });
}

// 최대값 - 최소값 출력
console.log(numbers[numbers.length - 1] - numbers[0]);
