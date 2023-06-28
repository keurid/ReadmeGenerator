const inquirer = require('inquirer');
const fs = require('fs');
// We want to use inquirer so the way we enable it is added a constant to make sure the code runs inquirer
// fs is a library already built into node, it allows this line of code to write our own README when we run the program.

// The node package inquirer has a neat feature where it allows us to prompt the user through the CLI where they can store data that they input
inquirer
    .prompt([
    {
      type: 'input', // What "type" it is referring to has more types of ways you can displace the message. It can include lists, checkboxes, and more!
      name: 'title', // Name is HOW we save the data that we want to know and saving it so that we can use it later to access user input.
      message: 'Enter the title of your project:', //The message is what the user sees when they run the program, it's the prompt they must enter.
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
      type: 'input',
      name: 'credits',
      message: 'Enter the proper credit for your project:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Choose a license for your project:',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Enter contribution guidelines for your project:',
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
  .then((answers) => { 
    const readmeContent = `
# ${answers.title}

## ${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Features
${answers.features}

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions reach out to me on https://github.com/${answers.githubUsername}
You can also reach me at ${answers.email}
    `;


    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
          console.error('Error writing README.md:', err);
        } else {
          console.log('README.md generated successfully!');
        }
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });