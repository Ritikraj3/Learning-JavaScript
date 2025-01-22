# Understanding Hoisting in JavaScript

**Hoisting** is a fundamental concept in JavaScript that deals with the behavior of variable and function declarations. Understanding hoisting is crucial for writing predictable and bug-free code.

---

## What is Hoisting?

Hoisting refers to JavaScript's default behavior of moving declarations to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.

### Key Points:
1. **Declarations Are Hoisted**:
   - Only declarations (not initializations) are hoisted.
2. **Scope Matters**:
   - Variables are hoisted within their functional or block scope.

---

## How Hoisting Works

### Variable Hoisting
Variables declared with `var`, `let`, and `const` behave differently when hoisted:

1. **`var` Hoisting**:
   - `var` declarations are hoisted and initialized with `undefined`.
   - Example:
     ```javascript
     console.log(a); // undefined
     var a = 10;
     console.log(a); // 10
     ```

2. **`let` and `const` Hoisting**:
   - Declarations are hoisted but are not initialized. Accessing them before the declaration causes a **ReferenceError**.
   - Example:
     ```javascript
     console.log(b); // ReferenceError: Cannot access 'b' before initialization
     let b = 20;
     ```

### Function Hoisting

1. **Function Declarations**:
   - Entire function declarations are hoisted to the top of their scope.
   - Example:
     ```javascript
     greet(); // Hello

     function greet() {
       console.log("Hello");
     }
     ```

2. **Function Expressions**:
   - Only the variable declaration is hoisted, not the function assignment.
   - Example:
     ```javascript
     greet(); // TypeError: greet is not a function

     var greet = function () {
       console.log("Hello");
     };
     ```

---

## Hoisting in Different Scenarios

### Example 1: `var` Hoisting
```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

### Example 2: `let` and `const` Hoisting
```javascript
console.log(y); // ReferenceError
let y = 10;
```

### Example 3: Function Hoisting
```javascript
greet(); // Hello

function greet() {
  console.log("Hello");
}
```

### Example 4: Class Hoisting
- Classes behave like `let` and `const`. They are hoisted but are not initialized.
```javascript
const obj = new MyClass(); // ReferenceError

class MyClass {
  constructor() {
    this.name = "Test";
  }
}
```

---

## Best Practices

1. **Declare Variables at the Top**:
   - Always declare variables at the beginning of their scope to avoid confusion.

2. **Use `let` and `const`**:
   - Prefer `let` and `const` over `var` to avoid unintended behavior.

3. **Understand Temporal Dead Zone (TDZ)**:
   - Variables declared with `let` and `const` are in the TDZ from the start of their block until their declaration is encountered.

4. **Be Explicit**:
   - Declare and initialize variables before using them for clarity.

---

## Summary

- **Hoisting** moves declarations to the top of their scope during the compile phase.
- Only declarations are hoisted; initializations are not.
- Variables declared with `var` are hoisted with an initial value of `undefined`, while `let` and `const` remain uninitialized.
- Function declarations are fully hoisted, but function expressions are not.

Understanding hoisting helps in writing clear, predictable, and error-free code in JavaScript.

