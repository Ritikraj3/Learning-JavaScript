# JavaScript Data Types

JavaScript is a **dynamic and loosely typed language**, meaning variables can hold values of any data type without explicit declaration. This document provides an overview of the data types in JavaScript, grouped into primitive and non-primitive categories.

## Primitive Data Types
Primitive types represent **single immutable values** and are the most basic building blocks in JavaScript.

1. **String**
   - Represents a sequence of characters.
   - Example:
     ```javascript
     let name = "Ritik";
     ```

2. **Number**
   - Represents both integers and floating-point numbers.
   - Example:
     ```javascript
     let age = 25;
     let price = 99.99;
     ```

3. **BigInt**
   - For handling large integers beyond the safe integer range for `Number`.
   - Example:
     ```javascript
     let bigNumber = 123456789012345678901234567890n;
     ```

4. **Boolean**
   - Represents `true` or `false` values.
   - Example:
     ```javascript
     let isLoggedIn = true;
     ```

5. **Undefined**
   - A variable declared but not assigned a value.
   - Example:
     ```javascript
     let user;
     console.log(user); // undefined
     ```

6. **Null**
   - Represents the intentional absence of any value.
   - Example:
     ```javascript
     let emptyValue = null;
     ```

7. **Symbol**
   - Represents a unique, immutable value often used as object keys.
   - Example:
     ```javascript
     let uniqueKey = Symbol("id");
     ```

## Non-Primitive Data Types
Non-primitive types are **mutable** and can hold collections of values or more complex entities.

1. **Object**
   - A collection of key-value pairs.
   - Example:
     ```javascript
     let user = {
       name: "Ritik",
       age: 25
     };
     ```

2. **Array** (a subtype of Object)
   - Ordered collection of values.
   - Example:
     ```javascript
     let fruits = ["apple", "banana", "mango"];
     ```

3. **Function** (also a subtype of Object)
   - Block of code designed to perform a particular task.
   - Example:
     ```javascript
     function greet() {
       console.log("Hello!");
     }
     ```

4. **Date**
   - Used to handle date and time.
   - Example:
     ```javascript
     let today = new Date();
     ```

## Type Checking
- Use `typeof` to check the data type of a value.
- Example:
  ```javascript
  console.log(typeof 25); // "number"
  console.log(typeof "Ritik"); // "string"
  ```

## Summary Table
| Data Type   | Description                      | Example                              |
|-------------|----------------------------------|--------------------------------------|
| String      | Sequence of characters          | `let str = "hello";`                |
| Number      | Integer or float                | `let num = 42;`                     |
| BigInt      | Large integer                   | `let big = 123n;`                   |
| Boolean     | True or false                   | `let bool = false;`                 |
| Undefined   | No assigned value               | `let x;`                            |
| Null        | Absence of value                | `let y = null;`                     |
| Symbol      | Unique identifier               | `let sym = Symbol("id");`          |
| Object      | Key-value pairs                 | `let obj = { key: "value" };`       |
| Array       | Ordered list                    | `let arr = [1, 2, 3];`              |
| Function    | Reusable block of code          | `function fn() {}`                  |

For more details, refer to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

## Interview Questions on JavaScript Data Types

1. **What are the different data types in JavaScript? Can you name them?**
   - JavaScript has the following data types: String, Number, BigInt, Boolean, Undefined, Null, Symbol, Object (including Array and Function).

2. **How does JavaScript handle dynamic typing?**
   - JavaScript variables can hold any data type, and their types can change at runtime based on the value assigned.
     Example:
     ```javascript
     let data = 42; // Number
     data = "Hello"; // String
     ```

3. **What is the difference between `null` and `undefined`?**
   - `null` represents an intentional absence of value, while `undefined` means a variable has been declared but not assigned a value.
     Example:
     ```javascript
     let x = null; // Intentional absence
     let y; // Undefined
     ```

4. **Explain the use of `typeof` operator in JavaScript. Provide examples.**
   - The `typeof` operator is used to check the data type of a variable.
     Example:
     ```javascript
     console.log(typeof 42); // "number"
     console.log(typeof "text"); // "string"
     ```

5. **What are the limitations of the `Number` data type in JavaScript? How does `BigInt` solve these?**
   - The `Number` type has a maximum safe value of `2^53 - 1`.
     `BigInt` can represent integers beyond this range.
     Example:
     ```javascript
     let big = 12345678901234567890n; // BigInt
     ```

6. **How is a `Symbol` different from other primitive data types? When would you use it?**
   - A `Symbol` is unique and immutable, often used as keys for object properties to avoid property name conflicts.
     Example:
     ```javascript
     let sym = Symbol("key");
     ```

7. **What is the difference between primitive and non-primitive data types in JavaScript?**
   - Primitive types (e.g., String, Number) are immutable, while non-primitive types (e.g., Object, Array) are mutable and can hold multiple values.

8. **Can you explain immutability in JavaScript? Which data types are immutable?**
   - Primitive data types are immutable, meaning their values cannot be changed once created. For example, modifying a string creates a new string instead of altering the original.

9. **How do you check if a variable is an array in JavaScript?**
   - Use `Array.isArray()` to check if a variable is an array.
     Example:
     ```javascript
     let arr = [1, 2, 3];
     console.log(Array.isArray(arr)); // true
     ```

10. **What happens if you try to perform arithmetic operations on `undefined` or `null`?**
    - `undefined`: Arithmetic operations result in `NaN` (Not-a-Number).
    - `null`: Treated as `0` in arithmetic operations.
      Example:
      ```javascript
      console.log(5 + undefined); // NaN
      console.log(5 + null); // 5
      ```

