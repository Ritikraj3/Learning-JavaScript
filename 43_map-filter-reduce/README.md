# README: Understanding `map`, `filter`, and `reduce` in JavaScript

JavaScript provides powerful array methods like `map`, `filter`, and `reduce` to manipulate and transform data efficiently. Here's a brief overview of these methods.

---

## 1. **`map` Method**

### Description:
- Creates a **new array** by applying a provided function to **each element** of the original array.
- Does not modify the original array.

### Syntax:
```javascript
array.map(callback(element, index, array), thisArg);
```

- **callback:** Function to apply to each element.
  - **element:** Current element being processed.
  - **index (optional):** Index of the current element.
  - **array (optional):** The array being traversed.
- **thisArg (optional):** Value to use as `this` inside the callback.

### Example:
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

---

## 2. **`filter` Method**

### Description:
- Creates a **new array** containing elements that pass a specified condition.
- Does not modify the original array.

### Syntax:
```javascript
array.filter(callback(element, index, array), thisArg);
```

- **callback:** Function to test each element.
  - **element:** Current element being processed.
  - **index (optional):** Index of the current element.
  - **array (optional):** The array being traversed.
- **thisArg (optional):** Value to use as `this` inside the callback.

### Example:
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

---

## 3. **`reduce` Method**

### Description:
- Executes a **reducer function** on each element of the array, resulting in a single output value.
- Often used to calculate sums, products, or aggregate results.

### Syntax:
```javascript
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

- **callback:** Function to execute on each element.
  - **accumulator:** Accumulated result from previous iterations.
  - **currentValue:** Current element being processed.
  - **index (optional):** Index of the current element.
  - **array (optional):** The array being traversed.
- **initialValue (optional):** Initial value for the accumulator.

### Example:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

---

## Key Differences:

| Feature         | `map`                         | `filter`                      | `reduce`                        |
|-----------------|-------------------------------|-------------------------------|---------------------------------|
| **Purpose**     | Transform elements            | Select elements               | Aggregate elements              |
| **Return Value**| New array                     | New array                     | Single value                    |
| **Use Cases**   | Modify data (e.g., double values) | Find specific items (e.g., evens) | Summation, concatenation, etc. |

---

## Practical Use Cases:
1. **`map`:** Transforming product prices, formatting strings.
2. **`filter`:** Removing invalid entries, finding specific records.
3. **`reduce`:** Calculating totals, merging objects, creating histograms.

These methods are essential tools for modern JavaScript development, enabling clean and functional data transformations!