#!usr/bin/env node

import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()


const programmStart=async(persons:Person)=>{

    do{console.log("Welcome")

    const ans = await inquirer.prompt({
        type:"list",
        message:"Hello! May i Help you , DO you like to chat someone ",
        name:"select",
        choices:["callcenter","student"],
    });

    if(ans.select== "callcenter"){
        console.log("Hello How may i help you")
        console.log("Need info regarding our services")


    }
    if(ans.select== "student"){
        const ans = await inquirer.prompt({
            type:"input",
            message:"which you want to talk",
            name:"student",
        });

        const student = persons.students.find(val=>val.name==ans.student)
        if (!student){
            const name= new Student(ans.student)
            persons.addStudent(name)

            console.log(`Hello I am ${name.name}, I am fine & Good`);
            console.log(persons.students )
        }

        if(student){
            console.log(`Hello I am ${student.name}, I am fine & Good........`);
            console.log(persons.students )
        }
    }}
    while(true)
}

programmStart(persons)