#!usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const apiLink:string = "https://opentdb.com/api.php?amount=11&category=17&difficulty=easy&type=multiple";

let fetchData = async (data : string) => {
    let fetchQuiz:any = await fetch (data);
    let res = await fetchQuiz.json();
    return res.results; 
};

let data = await fetchData(apiLink);

let startQuiz =async()=>{
    let score:number=0
    let name = await inquirer.prompt({
        type:"input",
        name:"fName",
        message:"What is your Name?",
    });

    for(let i=1 ; i<=10 ; i++){
        let answers = [... data[i].incorrect_answers,data[i].correct_answer];

        let ans = await inquirer.prompt({
            type:"list",
            name:"quiz",
            message:data[i].question,
            choices:answers.map((val:any)=> val),
        });

        if(ans.quiz == data[i].correct_answer){
            ++score;
            console.log(chalk.bold.italic.blue("Correct"))
        }else{
            console.log(`Correct Answer is ${chalk.bold.italic.red(data[i].correct_answer)} `)
        }
    }

    console.log(`Dear ${chalk.green.bold(name.fName)} , Your Score ${chalk.bold.blue(score)} out of ${chalk.red.bold("10")}`)
}; 

startQuiz();