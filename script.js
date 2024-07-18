// complete this js code// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage
const person = new Person('Alice', 30);
person.greet(); // Output: Hello, my name is Alice, I am 30 years old.

const employee = new Employee('Bob', 25, 'Software Developer');
employee.greet(); // Output: Hello, my name is Bob, I am 25 years old.
employee.jobGreet(); // Output: Hello, my name is Bob, I am 25 years old, and my job title is Software Developer.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
