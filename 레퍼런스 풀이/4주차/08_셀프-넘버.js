const notSelfNumbers = new Set();

for (let num = 1; num <= 10000; num++) {
  notSelfNumbers.add(
    num +
      num
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0)
  );
}

for (let num = 1; num <= 10000; num++) {
  if (!notSelfNumbers.has(num)) {
    console.log(num);
  }
}
