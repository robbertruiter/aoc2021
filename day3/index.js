const fs = require("fs");
const lines = fs.readFileSync("day3/input.txt", "utf8").split("\n");

function calculatePowerConsumption(report) {
  let rates = { gamma: "", epsilon: "" };
  for (let position = 0; position < report[0].length; position++) {
    let highValues = 0;
    let lowValues = 0;
    for (let i = 0; i < report.length; i++) {
      const reading = report[i];
      reading[position] === "1" ? highValues++ : lowValues++;
    }
    rates.gamma += highValues > lowValues ? "1" : "0";
    rates.epsilon += highValues < lowValues ? "1" : "0";
  }
  return parseInt(rates.gamma, 2) * parseInt(rates.epsilon, 2);
}

console.log(calculatePowerConsumption(lines));

function calculateRating(report, type) {
  let bitCriteria = "";
  for (let position = 0; position < report[0].length; position++) {
    let scores = { lowValues: 0, highValues: 0 };
    report.forEach((reading) => {
      reading[bitCriteria.length] === "1"
        ? scores.highValues++
        : scores.lowValues++;
    });
    switch (type) {
      case "oxygen":
        bitCriteria +=
          Math.max(scores.highValues, scores.lowValues) === scores.highValues
            ? "1"
            : "0";
        break;
      case "CO2":
      default:
        bitCriteria +=
          Math.min(scores.highValues, scores.lowValues) === scores.lowValues
            ? "0"
            : "1";
        break;
    }
    report = report.filter((reading) => reading.startsWith(bitCriteria));
    if (report.length === 1) {
      return report[0];
    }
  }
}

function calculateLifeSupportRating(report) {
  return (
    parseInt(calculateRating(report, "oxygen"), 2) *
    parseInt(calculateRating(report, "CO2"), 2)
  );
}

console.log(calculateLifeSupportRating(lines));
