const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./dist/style");
const { clear } = require("console");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { listenerCount } = require("events");

let finalTeamArray = [];

function startPrompt() {
    inquirer.prompt([{
        message: " Welcome to Team Generator! Please write your Team Name: ",
        name: "teamName"
    }
    ])
        .then(function (data) {
            const teamName = data.teamName
            finalTeamArray.push(teamName)
            addManager();
        })
}

function addManager() {
    inquirer.prompt([{
        message: "What is your Team Manager's Name?",
        name: "name"
    },
    {
        message: "What is your Team Manager's email address?",
        name: "email"
    },
    {
        message: "What is your Team Manager's office number?",
        name: "officeNumber"
    }
    ])
        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teammember = new Manager(name, id, email, officeNumber)
            finalTeamArray.push(teammember)
            addTeamMembers();
        })
}

function addTeamMembers() {
    inquirer.prompt([{
        type: "list",
        message: "Would you like add more Team Members?",
        choices: ["Yes, add an engineer", "Yes, add Intern", "No, my team is complete"],
        name: "addMemberData"
    }
    ])
        .then(function (data) {
            switch (data.addMemberData) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;

                case "Yes, add Intern":
                    addIntern();
                    break;

                case "No, my team is complete":
                    compileTeam();
                    break;
            }
        })
}

function addEngineer() {
    inquirer.prompt([{
        message: "What is your Team Engineer's Name?",
        name: "name"
    },
    {
        message: "What is your Team Engineer's Email Adress?",
        name: "email"
    },
    {
        message: "What is your Team Engineer's Github Account?",
        name: "github"
    }
    ])
        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length 
            const email = data.email
            const github = data.github
            const teammember = new Engineer(name, id, email, github)
            finalTeamArray.push(teammember)
            addTeamMembers()
        })
}

function addIntern() {
    inquirer.prompt([{
        message: "What is your Team Intern's Name?",
        name: "name"
    },
    {
        message: "What is your Team Intern's Email Adress?",
        name: "email"
    },
    {
        message: "What is your Team Intern's School?",
        name: "school"
    }
    ])
        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length 
            const email = data.email
            const school = data.school
            const teammember = new Intern(name, id, email, school)
            finalTeamArray.push(teammember)
            addTeamMembers()
        })
}

function compileTeam() {
    console.log("You have done it!!! Now give your team a raise")

    const htmlArray = []
    const htmlBeginning =
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${finalTeamArray[0]}</title>
        <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
        <style>
         ${style}
        </style>
    </head>
    <body>
        <div class = "banner-bar">
            <h1>${finalTeamArray[0]}</h1>
        </div>
        <div class="card-container">
    `
    htmlArray.push(htmlBeginning);
    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>OfficeNumber: ${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object);
    }
    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);
    fs.writeFile(`./dist/${finalTeamArray[0]}.html`, htmlArray.join(""), function(err){

    })

}
startPrompt()