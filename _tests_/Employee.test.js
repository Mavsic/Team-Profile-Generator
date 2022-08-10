// The first class is an Employee parent class with the following properties and methods:name, id, email, 


class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }

// getName()
getName() {
    return this.name;
}

// getId()
getId() {
    return this.id;
}

// getEmail()
getEmail() {
    return this.email;
}

// getRole()—returns 'Employee'
getRole () {
    return this.title;
}

}

module.exports= Employee



