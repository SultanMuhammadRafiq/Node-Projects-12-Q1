#! /usr/bin/env node
import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
const createUser = () => {
    let users = [];
    for (let i = 1; i < 10000; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(10000000 * Math.random() * 950000),
            balance: 100000 * i
        };
        users.push(user);
    }
    return users;
};
const atmMachine = async (users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: "Enter your Pin Code",
        name: "pin"
    });
    const user = users.find(val => val.pin == res.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmfunc(user);
        return;
    }
    console.log("Invalid User pin");
};
const atmfunc = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select the option...",
        choices: ["Withdraw", "Balance ", "transfer", "Exit"]
    });
    if (ans.select == "Withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter Amount",
            name: "Pkr"
        });
        if (amount.Pkr > user.balance) {
            return console.log("Account Balance is not sufesficient to fulfill your request");
        }
        console.log(`Withdraw Amount:${amount.Pkr}`);
        console.log(`Balance:${user.balance - amount.Pkr}`);
    }
    if (ans.select == "Balance") {
        console.log(`Balance: ${user.balance} `);
        return;
    }
    if (ans.select == "transfer") {
        const transfer = await inquirer.prompt({
            type: "number",
            message: "Enter your amount here",
            name: "PKR"
        });
        console.log(`Transfer Amount:${transfer.PKR}`);
        console.log(`Total Balance:${user.balance + transfer.PKR}`);
    }
    if (ans.select == "Exit") {
        console.log("Thanks for using ATM");
    }
};
const users = createUser();
atmMachine(users);
