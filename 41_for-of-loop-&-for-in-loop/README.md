# README: Understanding `for-of` and `for-in` Loops in JavaScript

JavaScript provides two powerful loops, `for-of` and `for-in`, to iterate over collections. Each serves a distinct purpose, and understanding their differences can help you write cleaner, more efficient code.

---

## 1. **`for-of` Loop**

### Description:
- Used to iterate **over the values** of an iterable object (e.g., arrays, strings, `Map`, `Set`).
- Provides direct access to the values of the iterable.
- Works with iterables like arrays, strings, and other objects implementing the iterable protocol.

### Syntax:
```javascript
for (const value of iterable) {
  // Code to execute for each value
}
```

### Examples:

#### **Example 1: Iterating Over an Array**
```javascript
const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// banana
// apple
// peach
// mango
// grapes
```

#### **Example 2: Iterating Over a String**
```javascript
const user = 'Ritik Raj';

for (const letter of user) {
  console.log(letter);
}

// Output:
// R
// i
// t
// i
// k
//  
// R
// a
// j
```

#### **Example 3: Using Object Keys**
```javascript
const person = {
  firstName: 'Ritik',
  lastName: 'Raj',
  age: 24,
  eyeColor: 'brown',
  city: 'banglore',
};

const personKeys = Object.keys(person);

for (const key of personKeys) {
  console.log(person[key]);
}

// Output:
// Ritik
// Raj
// 24
// brown
// banglore
```

---

## 2. **`for-in` Loop**

### Description:
- Used to iterate **over the keys (or property names)** of an object.
- Returns the keys as strings, which can be used to access their corresponding values.
- Can be used on arrays, but primarily designed for objects.

### Syntax:
```javascript
for (const key in object) {
  // Code to execute for each key
}
```

### Example:

#### **Example 1: Iterating Over an Object**
```javascript
const person = {
  firstName: 'Ritik',
  lastName: 'Raj',
  age: 24,
  eyeColor: 'brown',
  city: 'banglore',
};

for (const key in person) {
  console.log(key, ':', person[key]);
}

// Output:
// firstName : Ritik
// lastName : Raj
// age : 24
// eyeColor : brown
// city : banglore
```

---

## Key Differences Between `for-of` and `for-in` Loops

| Feature                 | `for-of`                             | `for-in`                              |
|-------------------------|---------------------------------------|---------------------------------------|
| **Purpose**             | Iterates over values of iterable objects | Iterates over keys of objects         |
| **Output**              | Values (e.g., elements of an array)  | Keys (e.g., property names of an object) |
| **Usage**               | Arrays, strings, maps, sets, etc.    | Objects (primarily)                   |
| **Object Iteration**    | Not used directly with objects       | Best for object properties            |

---

## Practical Scenarios:
- **Use `for-of`:** When working with arrays, strings, or other iterable data.
- **Use `for-in`:** When working with objects and you need to iterate over property keys.

These loops are essential tools for iterating through data structures in JavaScript. Understanding their distinctions ensures you use the right loop for the task!