#!usr/bin/env node
import inquirer from "inquirer";
import { faker } from '@faker-js/faker';
import chalk from "chalk";
class Customer {
    constructor(fName, lName, age, gender, mob, acc) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccountNumber(obj) {
        this.account.push(obj);
    }
    transaction(accobj) {
        let newAccounts = this.account.filter((acc) => acc.accNumber !== accobj.accNumber);
        this.account = [...newAccounts, accobj];
    }
}
let myBank = new Bank();
for (let i = 1; i <= 5000; i++) {
    let fName = faker.person.firstName("male");
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number());
    const cust = new Customer(fName, lName, 25 + i, "male", num, 1000 + i);
    myBank.addCustomer(cust);
    myBank.addAccountNumber({ accNumber: cust.accNumber, balance: 10000 * i });
}
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please select Services",
            choices: ["Balance Inquiry", "Cash Withdraw", "Cash Deposit"]
        });
        if (service.select == "Balance Inquiry") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold("Invalid Account Number"));
            }
            if (account) {
                let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
                console.log(`Dear ${chalk.green.bold(name?.firstName)} ${chalk.green.bold(name?.lastName)} Your Account Balance is ${chalk.bold.blue("$", account.balance)} `);
            }
        }
        if (service.select == "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Pleae Enter Your Amount.",
                    name: "Rupees"
                });
                let newBalance = account.balance - ans.Rupees;
                //transaction 
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        if (service.select == "Cash Deposit")
            if (service.select == "Cash Deposit") {
                let res = await inquirer.prompt({
                    type: "input",
                    name: "num",
                    message: "Please enter your Account Number:",
                });
                let account = myBank.account.find((acc) => acc.accNumber == res.num);
                if (!account) {
                    console.log(chalk.red.bold("Invalid Account Number"));
                }
                if (account) {
                    let ans = await inquirer.prompt({
                        type: "number",
                        message: "Pleae Enter Your Amount.",
                        name: "Rupees"
                    });
                    let newBalance = account.balance + ans.Rupees;
                    //transaction 
                    bank.transaction({ accNumber: account.accNumber, balance: newBalance });
                }
            }
    } while (true);
}
bankService(myBank);
