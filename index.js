const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
let addEmp = false;
const empArr = [];
const createEmp = (obj) => {
    switch(obj.role)   {
        case `Manager`:
            newEmp = new Manager(obj.name,obj.id,obj.email,obj.phone);
            empArr.push(newEmp);
            break;
        case `Engineer`:
            newEmp = new Engineer(obj.name,obj.id,obj.email,obj.gitHub);
            empArr.push(newEmp);
            break;
        case `Intern`:
            newEmp = new Intern(obj.name,obj.id,obj.email,obj.school);
            empArr.push(newEmp);
            break;
        default:
            console.log("You must select an employee role");
    };
};
const questions = [
    {
        type: "list",
        message: "What role does the employee have? ",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    },
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
        message: "What is their office phone number?",
        name: "phone",
        when: (answers) => answers.role === "Manager",
    },
    {
        type: "input",
        message: "What is their gitHub username?",
        name: "gitHub",
        when: (answers) => answers.role === "Engineer"
    },
    {
        type: "input",
        message: "What is their gitHub username?",
        name: "school",
        when: (answers) => answers.role === "Intern"
    },
    {
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "addEmp",
    }
];



// inquirer.prompt(questions)
//     .then((answers) => {
//         createEmp(answers);
//         addEmp = `${answers.addEmp}`;
//         console.log(addEmp);
// });

do  {
    inquirer.prompt(questions)
    .then((answers) => {
        createEmp(answers);
        console.log(addEmp);
        addEmp = `${answers.addEmp}`;
        console.log(addEmp);
    });
} while (addEmp);




    // while (addEmp) {
    //     inquirer.prompt(questions)
    //         .then((answers) => {
    //             if (answers.addEmployee)    {
    //                 inquirer.prompt(questions)
    //                     .then((answers) => {
    //                         createEmp(answers);
    //                     });
    //             } else {
    //                 addEmp = false;
    //                 console.log("Ok great, give me a minute to create a list of all your employees");
    //             };
    //     });
    // };