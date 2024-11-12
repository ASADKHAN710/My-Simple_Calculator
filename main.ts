#! /usr/bin/env node

import { log } from "console";
import inquirer from "inquirer";

// Asking Questions From User Through Inquirer:
const reply = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "first_Number" },
  {
    message: "Enter your second number",
    type: "number",
    name: "second_Number",
  },
  {
    message: "Select one of the below operator to perform your operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Condition Statement:

if (reply.operator === "Addition") {
  console.log(reply.first_Number + reply.second_Number);
} else if (reply.operator === "Subtraction") {
  console.log(reply.first_Number - reply.second_Number);
} else if (reply.operator === "Multiplication") {
  console.log(reply.first_Number * reply.second_Number);
} else if (reply.operator === "Division") {
  console.log(reply.first_Number / reply.second_Number);
} else {
  console.log("Please select suitable operator");
}
