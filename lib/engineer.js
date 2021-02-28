const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub)   {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    };

    getGitHub() {
        return this.gitHub
    };

}

module.exports = Engineer