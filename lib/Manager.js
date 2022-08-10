// The first class is an Employee parent class with the following properties and methods: name, id, email, pfficeNumber
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager"
        // getRole()—overridden to return 'Manager'
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager