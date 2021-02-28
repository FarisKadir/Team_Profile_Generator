const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const empArr = [];


const addEmp = () => {
    inquirer.prompt([
    {
        type: "list",
        message: "Do you want to add another team member?",
        choices: ["Yes, an Engineer", "Yes, an Intern", "No, I'm finished building my team."],
        name: "role"
    }
    ]).then((answers) =>    {
        switch(answers.role)    {
            case "Yes, an Engineer":
                engQ();
                break;
            case "Yes, an Intern":
                intQ();
                break;
            case "No, I'm finished building my team.":
                buildHtml();
                break;
        };
    });
};


const manQ = () =>  {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name? ",
            name: "name"
        },
        {
            type: "input",
            message: "What is their employee ID? ",
            name: "id",
        },
        {
            type: "input",
            message: "What is their email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is their office phone number?",
            name: "phone",
        }
    ]).then((answers) =>    {
        newEmp = new Manager(answers.name,answers.id,answers.email,answers.phone);
        empArr.push(newEmp);
        addEmp();
    });
};


const engQ = () =>  {
    inquirer.prompt([
            {
                type: "input",
                message: "What is their name? ",
                name: "name"
            },
            {
                type: "input",
                message: "What is their employee ID? ",
                name: "id",
            },
            {
                type: "input",
                message: "What is their email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is their gitHub username?",
                name: "gitHub",
            }
        ]).then((answers) =>    {
            newEmp = new Engineer(answers.name,answers.id,answers.email,answers.gitHub);
            empArr.push(newEmp);
            addEmp();
        });
};

const intQ = () =>  {
    inquirer.prompt([
        {
            type: "input",
            message: "What is their name? ",
            name: "name"
        },
        {
            type: "input",
            message: "What is their employee ID? ",
            name: "id",
        },
        {
            type: "input",
            message: "What is their email address?",
            name: "email",
        },

        {
            type: "input",
            message: "What school are they attending?",
            name: "school",
        }
    ]).then((answers) =>  {
        newEmp = new Intern(answers.name,answers.id,answers.email,answers.school);
        empArr.push(newEmp);
        addEmp();
    });
};

const buildHtml = () => {
    console.log("We're building!");
    console.log(JSON.stringify(empArr));
};



manQ();
