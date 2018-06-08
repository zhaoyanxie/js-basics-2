# JS Basics 2

- Open the project in Visual Studio Code
- Start the Live Server
- Open the Console tab on Chrome's DevTools


## Exercise 3: Objects and methods

1. Define a new object called `dog`:
	- Give it a property `name`, set it to any value
	- Give it a method `bark`, which will log `"woof!"` to the console when invoked
	- Log `dog.name` to the console
	- Invoke `dog.bark()`
	- Log `dog` to the console

2. Update the method `bark` above to say `"woof, I'm <name>!"`
	- e.g. if `dog.name` is `"Timmy"`, `dog.bark()` should print `"woof, I'm
		Timmy!"` on the console

3. Define a new object called `person`
	- Give it a `firstName` property
	- Give it a `lastName` property
	- Give it a `name` method that _returns_ the full name of the person
	- Give it a `birthYear` property
	- Give it an `ageThisYear` method that returns the age of the person
		- e.g. if `person.birthYear` is `2000` then `person.ageThisYear()`
		  should return `18`

4. Define a variable called `someString` with any string as its value

5. Log the above string's `length` property to the console

6. Set the `length` of `someString` to another number e.g. `200`

5. Log the `length` property of `someString` to the console again. Did it
   change? Why or why not?

1. Explore some more string methods e.g. `toLowerCase()`, `replace()` etc.
   ([refer to MDN][mdn-string])

1. Create a variable called `decimalNumber`, giving it some numeric value

1. Use the `toFixed()` method to convert the number to a formatted string with
   3 decimal places, and log it to the console

1. Declare a function `sum` that takes in two arguments and returns the sum of
   the two arguments

1. Log the value of the `sum` function's `name` property to the console

1. Log the return value of the `sum` function's `toString()` method to the
   console

## Exercise 4: Arrays

1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
   `'sahil'` and log it to the console

2. Log the value of the third element in `names` to the console

3. Log the value of the `names` array's `length` property to the console

4. Set the value of the `length` property to `1`

5. Once again, log the value of the `names` array's `length` property to the
   console. Did it change?

6. Log the entire `names` array to the console again

7. Add a few more elements to the array

8. Log the last element of the array to the console

9. Log the second last element of the array to the console

10. Change the `textContent` property of the second `p` tag on the page to
   `"JavaScript was here!"`

[mdn-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype


