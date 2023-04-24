// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "Project Title:",
    type: "input",
  },
  {
    name: "description",
    message: "Project description:",
    type: "input",
  },
  {
    name: "motivation",
    message: "What was your motivation?",
    type: "input",
  },
  {
    name: "build",
    message: "Why did you build this project?",
    type: "input",
  },
  {
    name: "Solution",
    message: "What problem does it solve?",
    type: "input",
  },
  {
    name: "Learning",
    message: "What did you learn?",
    type: "input",
  },
  {
    name: "installation",
    message: "Installation Instructions:",
    type: "input",
  },
  {
    name: "usage",
    message: "Usage information:",
    type: "input",
  },
  {
    name: "contributing",
    message: "Contribution Guidelines:",
    type: "input",
  },
  {
    name: "tests",
    message: "Test Instructions:",
    type: "input",
  },
  {
    name: "license",
    message: "License:",
    type: "list",
    choices: ["MIT", "ISC", "UNLICENSED"],
  },
  {
    name: "git",
    message: "Git username:",
    type: "input",
  },
  {
    name: "email",
    message: "Email Address:",
    type: "input",
  },
];

inquirer.prompt(questions).then((data) => writeToFile("README.md", data));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // object destructuring
  const {
    title,
    description,
    motivation,
    build,
    Solution,
    Learning,
    installation,
    usage,
    contributing,
    tests,
    license,
    git,
    email,
  } = data;
  fs.writeFile(
    fileName,
    `
# ${title} [![License:${license} ](https://img.shields.io/badge/license-${license}-blue.svg)]

## Description

${description}

- What was your motivation?
${motivation}
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
${build}
- What problem does it solve?
${Solution}
- What did you learn?
${Learning}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${license}

## Questions
Github: <a href='https://github.com/${git}'>${git}</a>

You can email me at: ${email}






  `,
    function (err) {
      if (err) console.log(err);
    }
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
