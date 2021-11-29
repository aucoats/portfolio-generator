const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers))
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