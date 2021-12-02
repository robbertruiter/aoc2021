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

console.log(countDeeperDepths(lines));
