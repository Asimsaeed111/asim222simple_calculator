#! /usr/bin/ env node
import inquirer from "inquirer";

const  answer = await inquirer.prompt([
 {massage: "Enter your first number", type: "number", name: "firstNumber" },
 {massage: "Enter  your Second number", type: "number", name: "secondnumber" },
 {massage: "select one of the operator to perform operation",
 type: "list", name: "operator",
 choices: ["Addition", "subtraction", "multiplication", "division"],
},
]);
console.log(answer)
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondnumber )}
else if(answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondnumber )}
else if(answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondnumber )}
else if(answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondnumber )}
console.log("end")