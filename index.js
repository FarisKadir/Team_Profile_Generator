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
                generateHtml();
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
            message: "What is their office number?",
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


const empCards = ()  =>  {
    let roleInfo = '';
    let html = '';
    for (let i = 0; i < empArr.length; i++) {
        switch(empArr[i].role)  {
            case "Manager":
                roleInfo = `<li class="list-group-item"><strong>Office Number:</strong> ${empArr[i].officeNumber}</li>`;
                break;
            case "Engineer":
                roleInfo = `<li class="list-group-item"><strong>GitHub Username:</strong> ${empArr[i].gitHub}</li>`;
                break;
            case "Intern":
                roleInfo = `<li class="list-group-item"><strong>School Name:</strong> ${empArr[i].school}</li>`;
                break;
        };

        html += `<div class="col-3 mb-2 mt-2">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2>${empArr[i].name}</h2>
                <h3>${empArr[i].role}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Employee ID:</strong> ${empArr[i].id}</li>
                <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${empArr[i].email}">${empArr[i].email}</a></li>
                ${roleInfo}
            </ul>
        </div>
    </div>`
    }
    return html;
};




const generateHtml = () => {
    let html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Reset CSS  -->
        <link rel="stylesheet" href="reset.css">

        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="bg-dark text-center text-white p-3">
            <h1>
                My Team
            </h1>
        </header>
        <main class="container">
                <div class="empcard row align-items-start">         
                    ${empCards()}
                </div>
            <div class="row mt-5"></div>
                
            <div class="row m-1"></div>
        </main>
        <footer>

        </footer>
    </body>
    </html>`;
    fs.writeFile('./dist/index.html', html, function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
    });
};

    



manQ();
