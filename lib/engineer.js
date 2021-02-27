const Employee = require('./employee')

class Engineer extends Employee {
    constructor(username)   {
        this.gitHub = username;
    };

    getGitHub() {
        return this.gitHub
    };

    getRole()   {
        return `Engineer`
    }
}

module.exports = Engineer