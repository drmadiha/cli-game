#! /usr/bin/env node
import inquirer from 'inquirer';
const randomNumber=13;
const answers=await inquirer.prompt([{
    name:"userGuessedNumber",
    type:"number",
    message:"please guess a number",
}
]);
if(answers.userGuessedNumber ===randomNumber)
{
    console.log("congtratulation you guessed right number");
} 
else { 
    console.log("you guessed wrong number");
}