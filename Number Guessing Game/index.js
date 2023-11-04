#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let genNUmber = Math.floor(Math.random() * 2);
let user = await inquirer.prompt({
    name: "num1",
    type: "list",
    message: "Please select number :",
    choices: ["0", "1"],
});
if (genNUmber == parseInt(user.num1)) {
    console.log(chalk.bold.green("Congratulations you have won"));
}
else {
    console.log(chalk.bold.redBright("Sorry you have Lost, Better Luck Next Time"));
}
console.log(user);
