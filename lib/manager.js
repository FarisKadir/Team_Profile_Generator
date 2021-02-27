const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber)   {
        this.officeNumber = officeNumber;
    };

    getOfficeNum()  {
        return this.officeNumber
    }

    getRole()   {
        return `Manager`
    }
}

module.exports = Manager