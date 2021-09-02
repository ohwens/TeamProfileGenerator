const inquirer = require('inquirer')
const fs = require('fs');
const Employee = require('../Office-Employees/lib/employee');
const Manager = require('../Office-Employees/lib/manager');
const Intern = require('../Office-Employees/lib/intern');
const Engineer = require('../Office-Employees/lib/engineer')

const employees = [];

