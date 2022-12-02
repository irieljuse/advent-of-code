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

elves.sort((a, b) => a - b);

console.log("Part 2: " + (elves.at(-1) + elves.at(-2) + elves.at(-3)));
