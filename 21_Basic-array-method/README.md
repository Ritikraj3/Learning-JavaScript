# Basic Array Methods in JavaScript

JavaScript provides a variety of methods to manipulate and interact with arrays. Below is a breakdown of some commonly used methods with examples:

---

## **1. `shift()`**
Removes the first element from an array and returns it.

```javascript
const evenNumber = [0, 2, 4, 6];
evenNumber.shift(); // Removes 0
console.log(evenNumber); // [2, 4, 6]
```

---

## **2. `unshift()`**
Adds one or more elements to the beginning of an array and returns the new length.

```javascript
const evenNumber = [2, 4, 6];
evenNumber.unshift(0); // Adds 0 at the start
console.log(evenNumber); // [0, 2, 4, 6]
```

---

## **3. `concat()`**
Merges two or more arrays into a new array.

```javascript
const animalsList = ['Lion', 'Tiger'];
const alphabet = ['a', 'b', 'c'];
const combined = animalsList.concat(alphabet);
console.log(combined); // ['Lion', 'Tiger', 'a', 'b', 'c']
```

---

## **4. `indexOf()`**
Returns the first index of a specified element, or `-1` if it is not found.

```javascript
const animalsList = ['Lion', 'Tiger', 'Wolves'];
const elementIndex = animalsList.indexOf('Tiger');
console.log(elementIndex); // 1
```

---

## **5. `includes()`**
Determines whether an array contains a specific element, returning `true` or `false`.

```javascript
const animalsList = ['Lion', 'Tiger', 'Wolves'];
const hasLeopard = animalsList.includes('Leopard');
console.log(hasLeopard); // false
```

---

## **6. `slice()`**
Returns a shallow copy of a portion of an array into a new array. The original array remains unchanged.

### Syntax
```javascript
array.slice(start, end);
```
- `start` (optional): The starting index (inclusive).
- `end` (optional): The ending index (exclusive).

### Example
```javascript
const animalsList = ['Lion', 'Tiger', 'Wolves', 'Jaguar'];
const sliced = animalsList.slice(1, 3);
console.log(sliced); // ['Tiger', 'Wolves']
console.log(animalsList); // ['Lion', 'Tiger', 'Wolves', 'Jaguar']
```

---

## **7. `splice()`**
Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

### Syntax
```javascript
array.splice(start, deleteCount, item1, item2, ...);
```
- `start`: The index to start modifying.
- `deleteCount`: Number of elements to remove.
- `item1, item2, ...` (optional): Elements to add.

### Example
```javascript
const animalsList = ['Lion', 'Tiger', 'Wolves', 'Jaguar'];

// Removing elements
animalsList.splice(1, 2); // Removes 2 elements starting from index 1
console.log(animalsList); // ['Lion', 'Jaguar']

// Adding elements
animalsList.splice(1, 0, 'Elephant', 'Cheetah');
console.log(animalsList); // ['Lion', 'Elephant', 'Cheetah', 'Jaguar']

// Replacing elements
animalsList.splice(1, 1, 'Giraffe');
console.log(animalsList); // ['Lion', 'Giraffe', 'Cheetah', 'Jaguar']
```

---

