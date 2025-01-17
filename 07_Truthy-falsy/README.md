# Truthy and Falsy Values in JavaScript

## Introduction
In JavaScript, every value has an inherent boolean value, which is determined when the value is used in a boolean context (e.g., in a conditional statement like `if`, `while`, or `for`). These boolean values are categorized into **truthy** and **falsy**.

### Truthy Values
Truthy values are values that are considered `true` when evaluated in a boolean context. Almost all values in JavaScript are truthy except for the few falsy values listed below. Examples of truthy values include:

- Non-zero numbers (e.g., `1`, `-1`, `3.14`)
- Non-empty strings (e.g., `'hello'`, `' '`)
- Objects (e.g., `{}`, `[]`)
- Functions
- The boolean `true`

### Falsy Values
Falsy values are values that are considered `false` when evaluated in a boolean context. There are exactly six falsy values in JavaScript:

1. `0`
2. `-0`
3. `NaN` (Not a Number)
4. `''` (Empty string)
5. `undefined`
6. `null`

## Code Example
Here's an example of how truthy and falsy values behave in conditional statements:

```javascript
const values = [0, -0, NaN, '', undefined, null, 1, 'hello', [], {}];

values.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});
```

### Output
```
0 is falsy
0 is falsy
NaN is falsy
 is falsy
undefined is falsy
null is falsy
1 is truthy
hello is truthy
 is truthy
[object Object] is truthy
```

## Interview Questions and Answers

### 1. **What are falsy values in JavaScript?**
   **Answer:** Falsy values are values that are considered `false` in a boolean context. The six falsy values in JavaScript are:
   - `0`
   - `-0`
   - `NaN`
   - `''`
   - `undefined`
   - `null`

### 2. **What is the difference between `undefined` and `null`?**
   **Answer:**
   - `undefined` means a variable has been declared but not assigned a value yet.
   - `null` is an assignment value that represents "no value" or "empty."
   
   Example:
   ```javascript
   let a;
   console.log(a); // undefined

   let b = null;
   console.log(b); // null
   ```

### 3. **Is an empty array `[]` a truthy or falsy value? Why?**
   **Answer:** An empty array `[]` is a truthy value in JavaScript. This is because objects (including arrays) are always considered truthy, regardless of their content.

### 4. **How do you check if a value is truthy or falsy?**
   **Answer:** You can use an `if` statement or the `Boolean` constructor:
   ```javascript
   const value = '';
   if (value) {
     console.log('Truthy');
   } else {
     console.log('Falsy');
   }

   // Using Boolean constructor
   console.log(Boolean(value)); // false
   ```

### 5. **What happens when you use `==` with truthy and falsy values?**
   **Answer:** When using the `==` operator, JavaScript performs type coercion, which can lead to unexpected results:
   ```javascript
   console.log(0 == false); // true
   console.log('' == false); // true
   console.log(null == undefined); // true
   ```
   To avoid this, always use the strict equality operator (`===`) which does not perform type coercion.

## Conclusion
Understanding truthy and falsy values is essential for writing clear and bug-free JavaScript code. By knowing which values are inherently truthy or falsy, you can make better decisions when handling conditions and improve the reliability of your programs.

