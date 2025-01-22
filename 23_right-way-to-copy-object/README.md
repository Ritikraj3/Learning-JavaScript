# Copying Objects in JavaScript

In JavaScript, copying objects can be done using shallow or deep copy techniques. It is important to understand the difference between the two and use the appropriate method depending on your requirements.

---

## **1. Shallow Copy**
A shallow copy creates a new object, but only duplicates the top-level properties. If the object contains nested objects or arrays, only references to those are copied, not the actual values.

### Methods for Shallow Copy:

### **Using `Object.assign()`**
```javascript
const user1 = {
    firstName: 'Ritik',
    lastName: 'Raj',
    pata: {
        city: 'Bengaluru',
        pincode: 560037
    }
};

const user2 = {};
Object.assign(user2, user1);
console.log(user2); // { firstName: 'Ritik', lastName: 'Raj', pata: { city: 'Bengaluru', pincode: 560037 } }

user2.firstName = 'Rishabh';
console.log(user1.firstName); // 'Ritik' (unchanged)

user2.pata.city = 'Delhi';
console.log(user1.pata.city); // 'Delhi' (nested object is shared)
```

### **Using Spread Syntax (`...`)**
```javascript
const user2 = { ...user1 };
console.log(user2); // Same as above

user2.lastName = 'Karn';
console.log(user1.lastName); // 'Raj' (unchanged)

user2.pata.city = 'Mumbai';
console.log(user1.pata.city); // 'Mumbai' (nested object is shared)
```

---

## **2. Deep Copy**
A deep copy duplicates every level of the object, including nested objects or arrays. This ensures that changes in the copied object do not affect the original object.

### Methods for Deep Copy:

### **Using `structuredClone()`** *(Recommended)*
Introduced in modern JavaScript, this method creates a deep copy of an object, including nested objects and arrays.

```javascript
const user2 = structuredClone(user1);
user2.pata.city = 'Chennai';
console.log(user1.pata.city); // 'Bengaluru' (unchanged)
```

### **Using `JSON.parse(JSON.stringify())`**
This method converts the object into a JSON string and parses it back into a new object. Note: This method does not support functions or special object types (e.g., `Date`).

```javascript
const user2 = JSON.parse(JSON.stringify(user1));
user2.pata.pincode = 123456;
console.log(user1.pata.pincode); // 560037 (unchanged)
```

---

## **Copying Arrays**

### Shallow Copy of Arrays

#### **Using `slice()`**
```javascript
const fruits = ['Mango', 'Apple', 'Orange'];
const myFruits = fruits.slice();
myFruits.push('Grapes');
console.log(fruits); // ['Mango', 'Apple', 'Orange'] (unchanged)
```

#### **Using Spread Syntax (`...`)**
```javascript
const myFruits = [...fruits];
```

#### **Using `concat()`**
```javascript
const myFruits = [].concat(fruits);
```

### Deep Copy of Arrays
For arrays containing nested objects, use `structuredClone()` or `JSON.parse(JSON.stringify())` as shown earlier.

---

## **Choosing the Right Method**
| **Method**                  | **Type**        | **Use Case**                                       |
|-----------------------------|-----------------|---------------------------------------------------|
| `Object.assign()`           | Shallow Copy    | Top-level properties only.                       |
| Spread Syntax (`...`)       | Shallow Copy    | Simpler syntax for shallow copy.                 |
| `structuredClone()`         | Deep Copy       | Best for complex objects with nested structures. |
| `JSON.parse(JSON.stringify())` | Deep Copy    | Useful but has limitations (e.g., no functions). |

---

## Conclusion
Understanding the distinction between shallow and deep copying is critical when working with JavaScript objects and arrays. Use shallow copy methods for simple objects and deep copy methods when dealing with nested data structures to ensure data integrity.

---
---
---
---
---
# Copying Objects in JavaScript

When working with objects in JavaScript, copying them can often be a requirement. Depending on the method used, you may perform either a **shallow copy** or a **deep copy**. This README will guide you through the right way to copy objects in JavaScript and explain the differences between these types of copies.

## Understanding Shallow and Deep Copies

### Shallow Copy
A shallow copy of an object is a new object that copies the **reference** to any nested objects or arrays instead of copying their values. As a result, changes to the nested objects in the original or copied object will reflect in both.

### Deep Copy
A deep copy creates a new object and recursively copies all nested objects and arrays, ensuring the original and copied objects are completely independent.

---

## Methods for Copying Objects

### Shallow Copy Methods
1. **Using the Spread Operator (`...`)**:
```javascript
const original = { name: "John", age: 30 };
const shallowCopy = { ...original };
console.log(shallowCopy); // { name: "John", age: 30 }
```

2. **Using `Object.assign()`**:
```javascript
const original = { name: "John", age: 30 };
const shallowCopy = Object.assign({}, original);
console.log(shallowCopy); // { name: "John", age: 30 }
```

> **Note**: Both methods copy only the top-level properties. Nested objects or arrays will still share references between the original and copied objects.

---

### Deep Copy Methods
1. **Using `JSON.parse` and `JSON.stringify`**:
```javascript
const original = { name: "John", address: { city: "New York" } };
const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy); // { name: "John", address: { city: "New York" } }
```
> **Limitations**:
> - Cannot copy functions, `undefined`, or special objects like `Date` or `Map`.
> - May lose precision for large numbers.

2. **Using a Custom Recursive Function**:
```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const original = { name: "John", address: { city: "New York" } };
const deepCopy = deepCopy(original);
console.log(deepCopy); // { name: "John", address: { city: "New York" } }
```

3. **Using Third-Party Libraries**:
   - **Lodash**:
     ```javascript
     const _ = require("lodash");
     const original = { name: "John", address: { city: "New York" } };
     const deepCopy = _.cloneDeep(original);
     console.log(deepCopy); // { name: "John", address: { city: "New York" } }
     ```
   - **Structured Clone API**:
     ```javascript
     const original = { name: "John", address: { city: "New York" } };
     const deepCopy = structuredClone(original);
     console.log(deepCopy); // { name: "John", address: { city: "New York" } }
     ```
     > Available in modern browsers and Node.js starting from version 17.

---

## Choosing the Right Method

- **Shallow Copy**:
  Use if your object contains only primitive values or you don’t need to separate nested objects.
  - Examples: Spread operator, `Object.assign()`.

- **Deep Copy**:
  Use if your object contains nested structures and you need a completely independent copy.
  - Examples: `JSON.parse(JSON.stringify())`, recursive function, `_.cloneDeep`, `structuredClone()`.

---

## Best Practices
- **Use Third-Party Libraries**: For robust and efficient deep copying, consider libraries like Lodash.
- **Be Mindful of Performance**: Deep copying can be computationally expensive for large objects.
- **Understand Limitations**: Each method has specific strengths and weaknesses; choose based on your requirements.

---


