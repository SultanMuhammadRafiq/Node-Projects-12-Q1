#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


class Student {
    name: string;
    id: number;
    balance: number;
    course: string;

    constructor(name: string, id: number, balance: number, course: string) {
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.course = course;
    }

    viewBalance() {
       console.log(chalk.green.bold(`Current Balance: ${this.balance}`))
    }

    payTuitionFees(fees: number) {
        this.balance = this.balance - fees;
    }

    studentStatus() {
        return chalk.green.green(`
            Name: ${this.name}
            Roll No: ${this.id}
            Balance: ${this.balance}
            Enrolled Course: ${this.course}
        `);
    }
}

let newStudent : any;

async function HandleInput() {
    // random roll no generated
    let studentRollNoGenerated = Math.floor(Math.random() * 90000) + 10000;

    let data = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: chalk.bold.blue("Enter Your Name"),
        },
        {
            type: "input",
            name: "balance",
            message: chalk.bold.green("Enter Your Balance"),
        },
        {
            type: "list",
            name: "course",
            message: chalk.bold.red("Select The course you want to learn"),
            choices: ["Mobile Repairing (2 MONTHS @ 5000 PKR)", "Digital Marketing (2 MONTHS @ 8000 PKR)","Virtual Assistant (3 MONTHS @ 10000 PKR)","Ecommerce Management (3 MONTHS @ 15000 PKR)","Laptop Repairing (2 MONTHS @ 8000 PKR)", "AC Technician (3 MONTHS @ 10000 PKR) ", "Web Development (6 MONTHS @ 20000 PKR)","Graphic Designer (6 MONTHS @ 20000 PKR)",],
            
        },
        
    ]);

    newStudent = new Student(data.name, studentRollNoGenerated, parseFloat(data.balance), data.course);
}

await HandleInput()

async function PerformOpertion(){

    let operations = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: chalk.bold.green("Select Options"),
            choices: ["Balance Amount", "Pay Fees" , "Status"],
        },
    ]);

    if (operations.action === "Balance Amount") {
        newStudent.viewBalance();
    }

    if (operations.action === "Pay Fees") {
        let fees = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: chalk.bold.green("Enter The course fees"),
            },
        ]);
        newStudent.payTuitionFees(fees.amount);
        newStudent.viewBalance();
    }

    if (operations.action === "Status") {
        console.log(newStudent.studentStatus());
    }
}



async function AskQuestions() {
    let restart;
    do {
        await PerformOpertion();
        restart = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                message: "Do you want doing again ?",
                choices: ['Yes', 'No'],
            },
        ]);
    } while (restart.restart === 'Yes');
    console.log(chalk.green.bold(`Thanks for using our Student Management System `));
}

AskQuestions();