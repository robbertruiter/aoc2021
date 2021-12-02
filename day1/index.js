const fs = require("fs");
const lines = fs
  .readFileSync("day1/input.txt", "utf8")
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

function countDeeperDepths(depths) {
  let counter = 0;
  for (let i = 0; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) {
      counter++;
    }
  }
  return counter;
}

function sumMeasurements(measurements) {
  let sum = [];
  for (let j = 0; j < measurements.length; j++) {
    const setOfThree =
      measurements[j] + measurements[j + 1] + measurements[j + 2];
    sum.push(setOfThree);
  }
  return sum;
}

console.log(countDeeperDepths(lines));
console.log(countDeeperDepths(sumMeasurements(lines)));
