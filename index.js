const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shape.js');

const questions = [
    {
        type: 'input',
        name: 'logoLetters',
        message: 'Please enter your logo letters, it must not be more than 3 letters',
      },
      {
        type: 'input',
        name: 'textColor',
        message: `Please enter text color keyword or a hexadecimal number for the logo's text color`,
      },
      {
        type: 'input',
        name: 'logoColor',
        message: `Please enter a color keyword or a hexadecimal number for the logo's background color`,
      },
      {
        type: 'list',
        name: 'logoShape',
        message: `Please choose logo shape`,
        choices: ['circle', 'square', 'triangle'],
      },
    ];

function init() {
  inquirer.prompt(questions).then(function (data) {
    const logoLetters = data.logoLetters
    const textColor = data.textColor
    const logoColor = data.logoColor
    const logoShape = data.logoShape
    let shape;
    if (logoShape==='circle')
          shape = new Circle();
        else if (logoShape==='square')
          shape = new Square();
        else
          shape = new Triangle();

      shape.setColor(logoColor);
  }
)}

init();
