const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber)   {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    };

    getOfficeNum()  {
        return this.officeNumber
    }

}

module.exports = Manager