const fs = require("fs");
const lines = fs.readFileSync("day2/input.txt", "utf8").split("\n");

function moveSubmarine(instructions) {
  let movement = { horizontal: 0, depth: 0 };
  instructions.forEach((instruction) => {
    const direction = instruction.substring(0, instruction.length - 2);
    const value = +instruction.substr(instruction.length - 1, 1);
    switch (direction) {
      case "forward":
        movement.horizontal += value;
        break;
      case "down":
        movement.depth += value;
        break;
      case "up":
        movement.depth -= value;
        break;
      default:
        break;
    }
  });
  return movement.horizontal * movement.depth;
}

function moveAndAimSubmarine(instructions) {
  let movement = { horizontal: 0, depth: 0, aim: 0 };
  instructions.forEach((instruction) => {
    const direction = instruction.substring(0, instruction.length - 2);
    const value = +instruction.substr(instruction.length - 1, 1);
    switch (direction) {
      case "forward":
        movement.horizontal += value;
        movement.depth += movement.aim * value;
        break;
      case "down":
        movement.aim += value;
        break;
      case "up":
        movement.aim -= value;
        break;
      default:
        break;
    }
  });
  return movement.horizontal * movement.depth;
}
console.log(moveSubmarine(lines));
console.log(moveAndAimSubmarine(lines));
