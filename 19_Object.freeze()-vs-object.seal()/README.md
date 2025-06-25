# Object.freeze(), Object.seal() and 'in' keyword in JavaScript

## Object.freeze()

The `Object.freeze()` method freezes an object, preventing any modifications.
- You **cannot add, delete, or modify** existing properties.
- The object becomes **immutable**.

```js
let obj = { name: "John" };
Object.freeze(obj);
obj.age = 30;  // Not allowed
obj.name = "Doe";  // Not allowed
```

## Object.seal()

The `Object.seal()` method seals an object, allowing property modification but **disallowing adding or deleting** properties.

```js
let obj = { name: "John" };
Object.seal(obj);
obj.name = "Doe";  // Allowed
delete obj.name;   // Not allowed
```

## The `in` Keyword in JavaScript

The `in` keyword is used to check if a property exists in an object (either directly or in its prototype chain).

## Syntax:
```js
"property" in object;
```

### Example:
```js
let car = { brand: "Toyota", model: "Corolla" };
console.log("brand" in car);  // true
console.log("year" in car);   // false
```

The `in` keyword returns `true` if the object has the specified property, even if its value is `undefined`.

### Example:
```js
let person = { name: "John", age: undefined };
console.log("age" in person);  // true
```


### For more information , visit: 
> - ['in' Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
> - [Object.freeze() and Object.seal()](https://www.geeksforgeeks.org/what-is-the-difference-between-freeze-and-seal-in-javascript/)
> - [YouTube (for both)](https://www.youtube.com/watch?v=K2v08vu-tK0&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=60)