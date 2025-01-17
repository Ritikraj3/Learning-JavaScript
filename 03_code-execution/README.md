# Code Execution in JavaScript

JavaScript code execution is handled by the JavaScript engine, which operates in two main phases:

## 1. **Compilation Phase**
- **Parsing:** The code is parsed into an Abstract Syntax Tree (AST).
- **Variable Hoisting:** Variable and function declarations are moved to the top of their scope.
- **Scope Creation:** Scopes are created for variables, functions, and blocks.

## 2. **Execution Phase**
- The code is executed line by line (interpreted).
- Values are assigned to variables, and functions are invoked.

## Key Concepts:
- **Call Stack:** Keeps track of function calls. Each new function invocation is added to the stack.
- **Event Loop:** Handles asynchronous operations (e.g., setTimeout, Promises).
- **Heap:** Memory is allocated here for objects and functions.

## Example Workflow:
```javascript
console.log(a); // undefined (hoisting)
var a = 10;
setTimeout(() => console.log('Async'), 0);
console.log('Sync');
```
- **Output:**
  1. `undefined`
  2. `Sync`
  3. `Async` (handled by the Event Loop after the main thread is clear).

For more details, refer to [MDN JavaScript Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Javascript_Runtime).

