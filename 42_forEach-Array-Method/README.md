# README: Understanding the `forEach` Array Method in JavaScript

The `forEach` method in JavaScript is used to execute a provided function once for each array element. It's a simple and efficient way to iterate through arrays.

---

## Key Features:
- Executes a callback function for each element in the array.
- Does not return a value (`undefined`).
- Does not mutate the original array but can be used to modify elements if the array contains objects.

---

## Syntax:
```javascript
array.forEach(callback(element, index, array), thisArg);
```

### Parameters:
1. **callback:** Function to execute for each element.
   - **element:** The current element being processed.
   - **index (optional):** The index of the current element.
   - **array (optional):** The array `forEach` is iterating over.
2. **thisArg (optional):** Value to use as `this` inside the callback.

---

## Examples:

### 1. **Basic Iteration**
```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));

// Output:
// 1
// 2
// 3
// 4
```

---

### 2. **Using Index**
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Cherry
```

---

### 3. **Modifying Object Properties**
```javascript
const users = [
  { name: "Alice", isActive: false },
  { name: "Bob", isActive: false },
];

users.forEach(user => (user.isActive = true));
console.log(users);

// Output:
// [
//   { name: "Alice", isActive: true },
//   { name: "Bob", isActive: true }
// ]
```

---

### 4. **Sum of Array Elements**
```javascript
let sum = 0;
const numbers = [5, 10, 15];
numbers.forEach(num => (sum += num));
console.log(sum);

// Output:
// 30
```

---

## Important Notes:
- **No Return Value:** Unlike `map`, `forEach` does not return a new array.
- **Chaining Not Possible:** Cannot chain `forEach` with other array methods like `filter` or `map`.
- **Use Cases:** Performing side effects, such as logging, modifying external variables, or updating object properties.

---

`forEach` is ideal for iterating through arrays when you don't need to create a new array or return a transformed value. Use it for tasks like logging or modifying array elements!