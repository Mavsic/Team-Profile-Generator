// The first class is an Employee parent class with the following properties and methods: name, id, email

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        //Engineer now has access to Employee methods  
        this.title = "Engineer";
        // getRole()—overridden to return 'Engineer'
        this.github = github;
    }
// getGithub()
getGithub() {
        return this.github;
    }
}

module.exports = Engineer;s