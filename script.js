// 1. Define a new object called `dog`:
// 	- Give it a property `name`, set it to any value
// 	- Give it a method `bark`, which will log `"woof!"` to the console when invoked
// 	- Log `dog.name` to the console
// 	- Invoke `dog.bark()`
// 	- Log `dog` to the console

// 2. Update the method `bark` above to say `"woof, I'm <name>!"`
// 	- e.g. if `dog.name` is `"Timmy"`, `dog.bark()` should print `"woof, I'm
// 		Timmy!"` on the console

const dog = {
    name: "Rusty",
    bark() {
        console.log("woof, I'm " + this.name + "!");
    }
}
console.log("The name of the dog is " + dog.name);
dog.bark();

// 3. Define a new object called `person`
// 	- Give it a `firstName` property
// 	- Give it a `lastName` property
// 	- Give it a `name` method that _returns_ the full name of the person
// 	- Give it a `birthYear` property
// 	- Give it an `ageThisYear` method that returns the age of the person
// 		- e.g. if `person.birthYear` is `2000` then `person.ageThisYear()`
// 		  should return `18`

const person = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 2000,
    name() {
        return `${this.firstName} ${this.lastName}`;
    },
    ageThisYear() {
        return 2018 - person.birthYear;
    }
}

console.log("The person's name is:", person.name());
console.log("The age this year is:", person.ageThisYear());

// 4. Define a variable called `someString` with any string as its value

const someString = "12345";

// 5. Log the above string's `length` property to the console
console.log(someString.length);

// 6. Set the `length` of `someString` to another number e.g. `200`
someString.length = 200;

// 5. Log the `length` property of `someString` to the console again. Did it
//    change? Why or why not?
console.log(someString.length);

// 8. Explore some more string methods e.g. `toLowerCase()`, `replace()` etc.
//    ([refer to MDN][mdn-string])
console.log("'string in small case'.toUpperCase() becomes " + 'string in small case'.toUpperCase());
console.log("'string in small case'.replace('small ', 'suit') becomes " + 'string in small case'.replace("small ", "suit"));

// 9. Create a variable called `decimalNumber`, giving it some numeric value
const decimalNumber = 123.456;

// 10. Use the `toFixed()` method to convert the number to a formatted string with
//    3 decimal places, and log it to the console
console.log("Number after 'toFixed()' becomes " + decimalNumber.toFixed());

// 11. Declare a function `sum` that takes in two arguments and returns the sum of
//    the two arguments
const sum = (arg1, arg2) => arg1 + arg2;
// 12. Log the value of the `sum` function's `name` property to the console
console.log("The name of the function is", sum.name);

// 13. Log the return value of the `sum` function's `toString()` method to the
//    console
console.log("The return value after applying toString() is", sum(100,200).toString());

