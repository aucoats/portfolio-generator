const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
          },
          {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
          }
    ])  
}

const promptProject = () => {
    console.log(`
    =================
    Add a New Project
    =================
    `);
        return inquirer.prompt([
            {
                type: 'input', 
                name: 'name', 
                message: 'What is the name of your project?'
            }, 
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)'
              },
              {
                type: 'checkbox',
                name: 'languages',
                message: 'What did you build this project with? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
              },
              {
                type: 'input',
                name: 'link',
                message: 'Enter the GitHub link to your project. (Required)'
              },
              {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?',
                default: false
              },
              {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to enter another project?',
                default: false
              }
        ])
}

promptUser().then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));

// const fs = require('fs');
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github);

// // replaced with the above ^ bc of inquirer package
// // const profileDataArgs = process.argv.slice(2);
// // console.log(profileDataArgs);

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// // ^^^ this can also be done like this: 

// // const [name, github] = profileDataArgs;

// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// })

// don't need parenthesis for one argument arrow function syntax
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('======================');

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);