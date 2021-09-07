const inquirer = require('inquirer')
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer')
const generateHTML = require('./src/template');

const employees = [];

const questions = [{
        type: 'input',
        name: 'name',
        message: 'What is the name of the Manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Id of the Manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email address of the Manager?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is the phone number of the Manager?'
    },
    {
        type: 'list',
        choices: ["Engineer", "Intern", "Done."],
        name: 'addmember',
        message: 'Do you want to add a member?'
    }
];

function engineerQuestions() {
    inquirer.prompt([{
            type: 'input',
            name: 'engName',
            message: `Please type in the Engineer's name`
        },
        {
            type: 'input',
            name: 'engId',
            message: `What is Engineer's ID?`
        },
        {
            type: 'input',
            name: 'engEmail',
            message: `What is Engineer's email address?`
        },
        {
            type: 'input',
            name: 'number1',
            message: `What is Engineer's phone number?`
        },
        {
            type: 'list',
            choices: ["Engineer", "Intern", "Done."],
            name: 'addmembers1',
            message: 'Do you want to add another member?'
        },
    ]).then((answer) => {

        const engineer = new Engineer(answer.engName, answer.engId, answer.engEmail, answer.number1);
        employees.push(engineer)

        if (answer.addmembers1 === 'Engineer') {
            engineerQuestions()
        } else if (answer.addmembers1 === 'Intern') {
            internQuestions()
        } else {
            writeToFile("index.html", generateHTML(employees))
        }

    });
}

function internQuestions() {
    inquirer.prompt([{
            type: 'input',
            name: 'inName',
            message: `What is the Intern's name?`
        },
        {
            type: 'input',
            name: 'inId',
            message: `What is the Intern's ID?`
        },
        {
            type: 'input',
            name: 'inEmail',
            message: `What is the Intern's email address?`
        },
        {
            type: 'input',
            name: 'number2',
            message: `What is the Intern's phone number?`
        },
        {
            type: 'list',
            choices: ["Engineer", "Intern", "Done."],
            name: 'addmembers2',
            message: 'Do you want to add another member?'
        },
    ]).then((answer) => {
        const intern = new Intern(answer.inName, answer.inId, answer.inEmail, answer.number2);
        employees.push(intern)

        if (answer.addmembers2 === 'Engineer') {
            engineerQuestions()
        } else if (answer.addmembers2 === 'Intern') {
            internQuestions()
        } else {
            writeToFile("index.html", generateHTML(employees))
        }
    });
}

function writeToFile(fileName, data) {
    fs.writeFile('./' + fileName, data, err => {
        if (err) {
            return console.error(err)
        } else {
            console.log("Successful writing to " + fileName);
        }
    })
}


function init() {
    inquirer.prompt(questions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
        employees.push(manager);

        switch (answers.addmember) {

            case "Engineer":
                engineerQuestions();
                break;

            case "Intern":
                internQuestions()
                break;

            default:
                writeToFile("index.html", generateHTML(employees))

        }

    })
};

init();