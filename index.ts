#! /usr/bin/env node
// importing chalk and inquirer packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colorful message

console.log(chalk.bold.greenBright("\n \t\t Coding With Huma - Word Counter"));
console.log("=".repeat(65));

// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
      name : "sentence",
      type: "input",
      message: "Enter a Sentence",

    }
]);
// Triming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(65));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n Word Count: ${chalk.bold.magenta(words.length)}`));
console.log("=".repeat(65));