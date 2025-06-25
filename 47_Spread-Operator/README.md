# Spread Operator (`...`) in JavaScript

> The **spread operator** (`...`) is a versatile feature in JavaScript that allows elements from arrays, objects, or other iterables to be spread into individual elements. It enhances code readability and flexibility by simplifying tasks such as copying, merging, and passing arguments into functions.


## Spread in Arrays

### 1. Copying Arrays
The spread operator can create a new array that is a shallow copy of an existing one.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // Output: [1, 2, 3]
```

### 2. Concatenating Arrays
By using the spread operator, you can concatenate arrays without needing to call `concat()`.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4]
```

### 3. Passing Arrays as Function Arguments
When a function expects individual parameters, you can pass elements of an array using the spread operator.

```javascript
const numbers = [1, 2, 3];
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...numbers)); // Output: 6
```


## Spread in Objects

### 1. Copying Objects
The spread operator allows you to copy properties from one object into a new object.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1, b: 2 }
```

### 2. Merging Objects
You can merge multiple objects into one, combining their properties.

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2 }
```

### 3. Overriding Properties
If two objects have the same property, the second object will override the property of the first one.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const overridden = { ...obj1, ...obj2 };
console.log(overridden); // Output: { a: 1, b: 3, c: 4 }
```


## Spread in Function Calls

The spread operator allows arrays or other iterables to be passed as individual arguments in a function call.

```javascript
const arr = [5, 10, 15];
console.log(Math.max(...arr)); // Output: 15
```


## Key Points
- The spread operator creates **shallow copies**, meaning nested objects or arrays are **not deeply copied**.
- It works with **iterables**, such as arrays, strings, and objects (for object literals, starting from ES6).


## References:
- [MDN - Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [YouTube]()