const fs = require("fs");
const [testNum, ...tests] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

tests.forEach((test) => {
  const [studentsNum, ...scores] = test.split(" ").map(Number);
  const average = scores.reduce((acc, cur) => acc + cur) / studentsNum;
  const aboveAverageStudents = scores.filter((score) => score > average);

  console.log(
    ((aboveAverageStudents.length / studentsNum) * 100).toFixed(3) + "%"
  );
});
