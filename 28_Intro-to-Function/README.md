# Functions in JavaScript

A **function** in JavaScript is a block of reusable code designed to perform a specific task.

## 1. Function Declaration

Functions are declared using the `function` keyword, followed by the name and a set of parameters.

```js
function greet(name) {
  console.log("Hello, " + name);
}
greet("John");  // Output: Hello, John
```

## 2. Function Expressions

Functions can also be defined as expressions and assigned to variables.

```js
let greet = function(name) {
  console.log("Hi, " + name);
};
greet("Jane");  // Output: Hi, Jane
```

## 3. Arrow Functions

Introduced in ES6, arrow functions provide a shorter syntax.

```js
let greet = (name) => console.log("Hey, " + name);
greet("Alice");  // Output: Hey, Alice
```

## 4. Parameters and Return Values

Functions can accept parameters and return values.

```js
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));  // Output: 7
```

## 5. Anonymous Functions

Functions without a name are called anonymous functions, often used as arguments to other functions.

```js
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);
```

## Summary

Functions in JavaScript allow for modular, reusable, and clean code, making them a core concept in the language.


### For more information , visit: 
> - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
> - [W3School](https://www.w3schools.com/js/js_functions.asp?goalId=77926566-cd44-48e3-b935-2da139e4f98a)
> - [YouTube](https://www.youtube.com/watch?v=htufr8nVeu4&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=69)
> - [YouTube (return)](https://www.youtube.com/watch?v=hz9Zpv36jAM&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=70)

## Other related topics
- [More on function](./more-on-function.md)
- [Declaration vs Expression](./declaration-vs-expression.md)