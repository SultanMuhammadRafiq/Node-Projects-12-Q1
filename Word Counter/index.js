#!usr/bin/env node
import inquirer from "inquirer";
function counter(paragraph) {
    let freeWhiteSpace = paragraph.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
async function startWordCounter(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write Your Desire paragraph here...",
            name: "Paragraph"
        });
        console.log(counter(res.Paragraph));
    } while (true);
}
startWordCounter(counter);
