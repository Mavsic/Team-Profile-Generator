// The first class is an Employee parent class with the following properties and methods: name, id, email, school 
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        // getRole()—overridden to return 'Intern'
        this.title = "Intern";
    }
    // getSchool()
    getSchool(){
        return this.school
    }
}

module.exports = Intern;