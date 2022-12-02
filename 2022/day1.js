import { argv } from "node:process";
import { readFile } from "node:fs/promises";

const filePath = argv[2] || "day1.txt";
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

console.log("Part 1: " + elves.reduce((prev, curr) => Math.max(prev, curr)));
console.log(
  "Part 2: " +
    elves
      .reduce(
        (prev, curr) => {
          let index = prev.findLastIndex((val) => curr > val);
          while (index > -1) {
            [prev[index], curr] = [curr, prev[index]];
            index--;
          }
          return prev;
        },
        [0, 0, 0]
      )
      .reduce((prev, curr) => prev + curr)
);
