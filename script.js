// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add the greet method to the Person prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Define the Employee constructor function
function Employee(name, age, jobTitle) {
    // Call the Person constructor with this context
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set up inheritance so that Employee.prototype is an instance of Person.prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

// Add the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
