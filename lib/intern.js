  
const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, number2) {
        super (name, id, email);
        this.number2 = number2;
    }
    getRole() {
        return "Intern";
    }
    getNumber2() {
        return this.number2;
    }
}

module.exports = Intern;