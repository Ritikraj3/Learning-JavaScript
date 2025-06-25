# Visualizing Memory Location in JavaScript

JavaScript manages memory in two major ways:
1. **Primitive Data Types** (stored in the stack)
2. **Non-Primitive (Reference) Data Types** (stored in the heap)

## 1. Memory Handling for Primitive Data Types

Primitive types in JavaScript (like `Number`, `String`, `Boolean`, `undefined`, `null`, `Symbol`, and `BigInt`) are **immutable** and stored directly in the **stack**. When a variable is assigned a primitive value, the actual value is stored in the memory location of the variable.

### Example 1: Primitive Data Types (Stack)

```js
let a = 10;
let b = a; // Value of 'a' is copied to 'b'

console.log(a); // 10
console.log(b); // 10

a = 20; // Changing 'a' does not affect 'b'
console.log(a); // 20
console.log(b); // 10
```

### Explanation:
- `a` and `b` are stored on the **stack** with their values.
- When `b = a;` is executed, a **copy** of the value of `a` is made for `b`.
- Changing `a` later does not affect `b` since each has its own memory location.

### Memory Visualization:
| Variable | Value | Memory Location |
|----------|-------|-----------------|
| `a`      | 10    | Stack           |
| `b`      | 10    | Stack           |

After updating `a` to 20:

| Variable | Value | Memory Location |
|----------|-------|-----------------|
| `a`      | 20    | Stack           |
| `b`      | 10    | Stack           |

## 2. Memory Handling for Reference Data Types

**Objects** and **Arrays** in JavaScript are reference types and stored in the **heap**. Variables that reference objects store **memory addresses** (pointers) to the actual objects in the heap. When you assign one object to another, both variables refer to the same memory location.

### Example 2: Reference Data Types (Heap)

```js
let obj1 = { name: 'Alice' };
let obj2 = obj1; // Both obj1 and obj2 refer to the same object in memory

console.log(obj1.name); // Alice
console.log(obj2.name); // Alice

obj1.name = 'Bob'; // Modifying obj1 affects obj2 as well
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob
```

### Explanation:
- `obj1` and `obj2` are reference variables, pointing to the same object in the **heap**.
- When you modify the object via `obj1`, the change is reflected in `obj2` since both point to the same memory location.

### Memory Visualization:
| Variable | Value (Reference) | Memory Location |
|----------|-------------------|-----------------|
| `obj1`   | Address 0x001      | Stack           |
| `obj2`   | Address 0x001      | Stack           |

| Heap Memory | Value           |
|-------------|-----------------|
| 0x001       | `{ name: 'Alice' }` |

After updating `obj1.name` to `'Bob'`:

| Heap Memory | Value           |
|-------------|-----------------|
| 0x001       | `{ name: 'Bob' }` |

### Example 3: Array (Reference Type)

```js
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references the same array as arr1

arr1.push(4); // Modifying arr1 affects arr2
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```

### Explanation:
- `arr1` and `arr2` both point to the same array in the heap.
- Adding an element to `arr1` also affects `arr2` because they reference the same memory location.

### Memory Visualization for Arrays:
| Variable | Value (Reference) | Memory Location |
|----------|-------------------|-----------------|
| `arr1`   | Address 0x002      | Stack           |
| `arr2`   | Address 0x002      | Stack           |

| Heap Memory | Value           |
|-------------|-----------------|
| 0x002       | `[1, 2, 3]`     |

After updating `arr1.push(4)`:

| Heap Memory | Value           |
|-------------|-----------------|
| 0x002       | `[1, 2, 3, 4]`  |

## 3. Passing by Value vs Passing by Reference

- **Primitive types** are passed by value. When you pass a primitive value to a function or assign it to another variable, a copy of the value is made.
- **Reference types** are passed by reference. When you pass an object or array to a function or assign it to another variable, a reference (or memory address) is shared, not a copy of the object.

### Example 4: Passing by Value (Primitive)

```js
function modifyValue(x) {
    x = x * 2;
    console.log(x); // 40
}

let num = 20;
modifyValue(num);
console.log(num); // 20 (remains unchanged)
```

### Explanation:
- `num` is passed by value, so the original `num` remains unchanged after the function call.

### Example 5: Passing by Reference (Object)

```js
function modifyObject(obj) {
    obj.name = 'Charlie';
}

let person = { name: 'Alice' };
modifyObject(person);
console.log(person.name); // Charlie (changed)
```

### Explanation:
- `person` is passed by reference, so changes made to `obj` inside the function affect the original `person` object.

## Summary

- **Primitive Data Types**: Stored in the **stack** and passed by value.
- **Reference Data Types**: Stored in the **heap** and passed by reference.
- **Stack**: Handles simple, static data like numbers and strings.
- **Heap**: Handles complex objects like arrays and objects, where memory allocation is dynamic.

Understanding how JavaScript handles memory for both primitive and reference types is crucial for writing efficient and bug-free code, especially when dealing with functions and object references.

### For more information about Data visualization, memory location, and memory address in JavaScript, visit: 
> - [YouTube ](https://www.youtube.com/watch?v=Gqlv6inCZqI&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=58)