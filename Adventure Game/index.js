#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Oppoent",
    choices: ["Skeleton", "Assasin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for Life.."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health your health is ${p1.fuel}`));
        }
        if (ask.option == "Run for Life..") {
            console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
            process.exit();
        }
        if (opponent.select == "Skeleton") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "option",
                message: "Select Your Opponent",
                choices: ["Attack", "Drink Portion", "Run for Life.."]
            });
            if (ask.option == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                    console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                    console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                    if (o1.fuel <= 0) {
                        console.log(chalk.green.italic("You Win"));
                        process.exit();
                    }
                }
            }
            if (ask.option == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You drink health your health is ${p1.fuel}`));
            }
            if (ask.option == "Run for Life..") {
                console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                process.exit();
            }
        }
    }
    if (opponent.select == "Assasin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for Life.."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health your health is ${p1.fuel}`));
        }
        if (ask.option == "Run for Life..") {
            console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
            process.exit();
        }
        if (opponent.select == "Skeleton") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "option",
                message: "Select Your Opponent",
                choices: ["Attack", "Drink Portion", "Run for Life.."]
            });
            if (ask.option == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                    console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                    console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                    if (o1.fuel <= 0) {
                        console.log(chalk.green.italic("You Win"));
                        process.exit();
                    }
                }
            }
            if (ask.option == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You drink health your health is ${p1.fuel}`));
            }
            if (ask.option == "Run for Life..") {
                console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                process.exit();
            }
        }
    }
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for Life.."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health your health is ${p1.fuel}`));
        }
        if (ask.option == "Run for Life..") {
            console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
            process.exit();
        }
        if (opponent.select == "Skeleton") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "option",
                message: "Select Your Opponent",
                choices: ["Attack", "Drink Portion", "Run for Life.."]
            });
            if (ask.option == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                    console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                    console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                    if (o1.fuel <= 0) {
                        console.log(chalk.green.italic("You Win"));
                        process.exit();
                    }
                }
            }
            if (ask.option == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You drink health your health is ${p1.fuel}`));
            }
            if (ask.option == "Run for Life..") {
                console.log(chalk.red.italic("You have lost Battle , try Luck Next Time"));
                process.exit();
            }
        }
    }
} while (true);
