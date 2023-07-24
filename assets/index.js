// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// Define your list of questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title",
     
  },

  {
    type: "input",
    name: "description",
    message: "Insert Description",
     
  },

  {
    type: "input",
    name: "installation",
    message: "Describe instruction",
  },

  {
    type: "input",
    name: "contribution",
    message: "guidelines",
  },

  {
    type: "input",
    name: "instructions",
    message: "insert instructions",
  },

  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'ISC License (ISC)', 'none']
    //
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      console.log("Survey results:");
      console.log(answers);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });

}

// Function call to initialize app


init()

