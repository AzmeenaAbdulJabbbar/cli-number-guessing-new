#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
//console.log (randomNumber)
const numbers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess the number between 1-10",
    }
]);
if (numbers.userGuessNumber === randomNumber) {
    console.log("congratulations!");
}
else {
    console.log("please try again");
}
console.log(numbers);
