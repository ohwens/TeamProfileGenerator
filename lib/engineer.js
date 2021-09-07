const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, number1) {
        super(name, id, email);
        this.number1 = number1
    }

    getRole() {
        return "Engineer";
    }

    getNumber1() {
        return this.number1;
    }

}

module.exports = Engineer;