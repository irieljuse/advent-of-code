import { argv } from "node:process";
import { readFile } from "node:fs/promises";

const filePath = argv[2] || "input1.txt";
const input = await readFile(filePath, { encoding: "utf8" });

let elves = [0];
let elf_index = 0;

for (let calories of input.split(/\r?\n/)) {
  if (calories === "") {
    ++elf_index;
    continue;
  }

  elves[elf_index] = (elves[elf_index] || 0) + Number.parseInt(calories);
}

console.log("Part 1: " + elves.reduce((acc, curr) => Math.max(acc, curr)));
console.log(
  "Part 2: " +
    elves
      .reduce(
        (prev, curr) => {
          let [max, max2, max3] = prev;
          if (curr > max) {
            max3 = max2;
            max2 = max;
            max = curr;
          } else if (curr > max2) {
            max3 = max2;
            max2 = curr;
          } else if (curr > max3) {
            max3 = curr;
          }
          return [max, max2, max3];
        },
        [0, 0, 0]
      )
      .reduce((prev, curr) => prev + curr)
);
