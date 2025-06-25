# Decision Making in JavaScript

Decision-making structures in JavaScript allow you to execute different blocks of code based on certain conditions. The most commonly used decision-making statements are `if`, `else`, `else if`, `switch`, and the ternary operator.

## 1. `if` Statement

The `if` statement is used to execute a block of code if the condition is true.

### Syntax:
```js
if (condition) {
    // Code to execute if condition is true
}
```

### Example:
```js
let age = 18;

if (age >= 18) {
    console.log('You are an adult.');
}
```

## 2. `else` Statement

The `else` statement is used to execute a block of code if the `if` condition is false.

### Syntax:
```js
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

### Example:
```js
let age = 16;

if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are not an adult.');
}
```

## 3. `else if` Statement

The `else if` statement is used to test multiple conditions. If the first condition is false, it checks the next one.

### Syntax:
```js
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if all conditions are false
}
```

### Example:
```js
let score = 85;

if (score >= 90) {
    console.log('Grade A');
} else if (score >= 80) {
    console.log('Grade B');
} else {
    console.log('Grade C');
}
```

## 4. `switch` Statement

The `switch` statement is used to execute one of many blocks of code based on the value of an expression. It is typically used when you need to compare the same expression to multiple possible values.

### Syntax:
```js
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if none of the cases match
}
```

### Example:
```js
let day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Unknown day');
}
```

- The `break` statement is used to stop the execution of code once a match is found.
- The `default` case is optional and executes if no cases match the expression.

## 5. Ternary Operator

The ternary operator is a shorthand for the `if-else` statement. It takes three operands: a condition, a result if true, and a result if false.

### Syntax:
```js
condition ? expressionIfTrue : expressionIfFalse;
```

### Example:
```js
let age = 18;
let message = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(message);
```

## 6. Nested Decision-Making

You can nest `if`, `else if`, and `else` statements to create more complex decision-making structures.

### Example:
```js
let num = 10;

if (num > 0) {
    if (num % 2 === 0) {
        console.log('The number is positive and even.');
    } else {
        console.log('The number is positive and odd.');
    }
} else {
    console.log('The number is not positive.');
}
```

## 7. Practical Use in Real-World Scenarios

Decision-making structures are often used to handle user input, control application flow, and manage different outcomes based on various conditions.

### Example: Checking User Login Status
```js
let isLoggedIn = true;
let userRole = 'admin';

if (isLoggedIn) {
    if (userRole === 'admin') {
        console.log('Welcome, Admin!');
    } else {
        console.log('Welcome, User!');
    }
} else {
    console.log('Please log in to continue.');
}
```

## Summary of Decision-Making Statements

| Statement | Description                                              | Example                        |
|-----------|----------------------------------------------------------|--------------------------------|
| `if`      | Executes code if the condition is true                    | `if (x > 10) { ... }`          |
| `else`    | Executes code if the `if` condition is false              | `else { ... }`                 |
| `else if` | Tests multiple conditions                                 | `else if (x > 5) { ... }`      |
| `switch`  | Executes one of many blocks based on a specific value     | `switch(x) { case 1: ... }`    |
| `? :`     | Shorthand for `if-else`, known as the ternary operator    | `condition ? true : false`     |


For more information about Decision making in JavaScript, visit: 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
> - [W3Schools](https://www.w3schools.com/js/js_if_else.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=6-dv7UETgJg&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=53&pp=iAQB)