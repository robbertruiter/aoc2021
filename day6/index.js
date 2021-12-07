const fs = require("fs");
const ages = fs.readFileSync("day6/input.txt", "utf8").split(",");

function initiateFishCounting() {
  const groupedFishes = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  };
  ages.forEach((fish) => {
    groupedFishes[fish.toString()]++;
  });
  return groupedFishes;
}

function countNewFishes(days) {
  let groupedFishes = initiateFishCounting();
  for (let day = 1; day <= days; day++) {
    let todaysFish = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    };
    for (const age in groupedFishes) {
      if (age !== "0") {
        const newAge = age - 1;
        todaysFish[newAge] += groupedFishes[age];
      } else {
        todaysFish["8"] += groupedFishes[age];
        todaysFish["6"] += groupedFishes[age];
      }
    }
    groupedFishes = { ...todaysFish };
  }
  return Object.values(groupedFishes).reduce((a, b) => a + b);
}

console.log(countNewFishes(256));
