const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generator = require('./generator');

const userQuestions = [
  
    {
      type: 'input',
      name: 'title',
      message: 'Please input your project name: ',
    },
  
    {
      type: 'input',
      name: 'description',
      message: 'Please briefly describe your project: ',
    },
  
    {
      type: 'list',
      name: 'license',
      message: 'Please select the license of your project: ',
      choices: ['No License', 'GPL 3.0', 'BSD 3', 'MIT'],
    },
  
    {
      type: 'input',
      name: 'installation',
      message: 'Please specify the command to install dependencies: ',
    },
  
    {
      type: 'input',
      name: 'test',
      message: 'Please specify the command to run tests: ',
    },
  
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information: ',
    },
    
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide information for contributing: ',
    },
  
    {
      type: 'input',
      name: 'github',
      message: 'Please input your GitHub username: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please input your email address: ',
    },
    
  ];

  function createFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function initializer() {
    inquirer.prompt(userQuestions).then((inquirerResponses) => {
      console.log('Your README has been generated!');
      createFile('README.md', generator({ ...inquirerResponses }));
    });
  }
  
  initializer();