const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions for your project:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])