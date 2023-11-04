#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let apiLink = "https://v6.exchangerate-api.com/v6/5627fe6ef82cdc93dfae7641/latest/PKR";
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apiLink);
let countries = Object.keys(data);
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Convert from",
    choices: countries,
});
let userMoney = await inquirer.prompt({
    type: "number",
    name: "Rupees",
    message: `Please enter the amount in ${chalk.green.bold(firstCountry.name)}: `,
});
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Convert to",
    choices: countries,
});
let conversion = `https://v6.exchangerate-api.com/v6/5627fe6ef82cdc93dfae7641/pair/${firstCountry.name}/${secondCountry.name}`;
let conversionData = async (data) => {
    let conversionData = await fetch(data);
    let res = await conversionData.json();
    return res.conversion_rate;
};
let conversionRate = await conversionData(conversion);
let convertedRate = userMoney.Rupees * conversionRate;
console.log(convertedRate);
