# Arrays in JavaScript

## Overview
An array is a data structure in JavaScript used to store multiple values in a single variable. Arrays can hold elements of any data type and are widely used to manage lists and collections.

---

## Key Features
- **Dynamic Size**: Arrays in JavaScript are dynamically resizable.
- **Indexing**: Array elements are accessed using zero-based indexing.
- **Heterogeneous Elements**: Arrays can store elements of different types (e.g., numbers, strings, objects).

---

## Syntax
To create an array:
```javascript
// Using array literal
const fruits = ["Apple", "Banana", "Cherry"];

// Using the Array constructor
const numbers = new Array(1, 2, 3);
```

---

## Common Methods
Here are some frequently used methods for working with arrays:

1. **Adding Elements**:
   - `push()`: Adds an element to the end of the array.
     ```javascript
     const fruits = ["Apple"];
     fruits.push("Banana"); // ["Apple", "Banana"]
     ```
   - `unshift()`: Adds an element to the beginning of the array.
     ```javascript
     fruits.unshift("Cherry"); // ["Cherry", "Apple", "Banana"]
     ```

2. **Removing Elements**:
   - `pop()`: Removes the last element of the array.
     ```javascript
     fruits.pop(); // ["Cherry", "Apple"]
     ```
   - `shift()`: Removes the first element of the array.
     ```javascript
     fruits.shift(); // ["Apple"]
     ```

3. **Accessing Elements**:
   - Use the index to retrieve elements.
     ```javascript
     const firstFruit = fruits[0]; // "Apple"
     ```

4. **Iterating Over Arrays**:
   - `for` loop:
     ```javascript
     for (let i = 0; i < fruits.length; i++) {
       console.log(fruits[i]);
     }
     ```
   - `forEach()` method:
     ```javascript
     fruits.forEach(fruit => console.log(fruit));
     ```

5. **Transforming Arrays**:
   - `map()`: Returns a new array by applying a function to each element.
     ```javascript
     const lengths = fruits.map(fruit => fruit.length);
     ```

6. **Filtering Arrays**:
   - `filter()`: Returns a new array containing elements that meet a condition.
     ```javascript
     const longFruits = fruits.filter(fruit => fruit.length > 5);
     ```

7. **Finding Elements**:
   - `find()`: Finds the first element that meets a condition.
     ```javascript
     const cherry = fruits.find(fruit => fruit === "Cherry");
     ```

---

## Examples
### Creating and Modifying an Array
```javascript
const numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
numbers.pop();   // [1, 2, 3]
numbers[0] = 0;  // [0, 2, 3]
```

### Using Higher-Order Functions
```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num ** 2); // [1, 4, 9, 16, 25]
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
```

---

