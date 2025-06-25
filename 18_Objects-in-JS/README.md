# Objects in JavaScript

In JavaScript, an **object** is a collection of key-value pairs, where the keys are called properties (or methods if they are functions) and the values can be of any data type. Objects allow you to store, modify, and manage related data in a structured way.

## *Basic Object fundamentals*
## 1. Creating a Basic Object

You can create an object using **object literal** syntax:

```js
let person = {
    name: 'John',   // Property: 'name' with value 'John'
    age: 30         // Property: 'age' with value 30
};

console.log(person.name); // Access the 'name' property: John
console.log(person.age);  // Access the 'age' property: 30
```

- The object `person` has two properties: `name` and `age`.
- You can access the properties using **dot notation** (`person.name`) or **bracket notation** (`person['name']`).

## 2. Adding or Modifying Properties

You can add new properties to an object or modify existing ones.

```js
person.city = 'New York';  // Adding a new property 'city'
person.age = 31;           // Modifying the 'age' property

console.log(person.city);  // New York
console.log(person.age);   // 31
```

## 3. Deleting Properties

You can remove a property from an object using the `delete` keyword.

```js
delete person.age;  // Remove the 'age' property
console.log(person.age);  // undefined (property is deleted)
```


## *More About object*
## 1. Creating an Object

You can create an object in multiple ways, such as using object literals, the `new` keyword, or the `Object.create()` method.

### Example 1: Object Literal

```js
let person = {
    name: 'John',
    age: 30,
    isMarried: true,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

console.log(person.name); // John
console.log(person.age);  // 30
person.greet();           // Hello, John
```

### Explanation:
- The `person` object has four properties: `name`, `age`, `isMarried`, and `greet` (which is a method).
- You can access object properties using dot notation (`person.name`) or bracket notation (`person['name']`).

### Example 2: Using the `new` Keyword

```js
let car = new Object();
car.brand = 'Toyota';
car.model = 'Corolla';
car.year = 2021;

console.log(car.brand);  // Toyota
console.log(car.model);  // Corolla
```

### Explanation:
- You can create an object using the `new Object()` syntax, then add properties to it.

## 2. Accessing Object Properties

You can access object properties using **dot notation** or **bracket notation**.

### Dot Notation

```js
let person = {
    name: 'Alice',
    age: 25
};

console.log(person.name);  // Alice
console.log(person.age);   // 25
```

### Bracket Notation

```js
let person = {
    name: 'Alice',
    age: 25
};

console.log(person['name']);  // Alice
console.log(person['age']);   // 25
```

- Use bracket notation when the property name is dynamic or contains special characters.

### Example with Dynamic Property

```js
let propName = 'age';
console.log(person[propName]); // 25
```

## 3. Modifying Object Properties

You can update the properties of an object by assigning new values to them.

```js
let person = {
    name: 'Bob',
    age: 40
};

person.age = 45;  // Update the 'age' property
console.log(person.age);  // 45
```

## 4. Adding New Properties

You can add new properties to an existing object dynamically.

```js
let person = {
    name: 'Chris'
};

person.city = 'New York';  // Add new property 'city'
console.log(person.city);  // New York
```

## 5. Deleting Object Properties

You can remove properties from an object using the `delete` keyword.

```js
let person = {
    name: 'David',
    age: 35
};

delete person.age;  // Delete the 'age' property
console.log(person.age);  // undefined
```

## 6. Methods in Objects

A **method** is a function that is a property of an object. You can define methods inside objects to perform specific actions.

### Example: Adding Methods to an Object

```js
let person = {
    name: 'Emma',
    age: 28,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

person.greet();  // Hello, Emma
```

- Inside methods, `this` refers to the current object (`person` in this case).

## 7. Checking for Property Existence

You can check if a property exists in an object using the `in` operator or the `hasOwnProperty()` method.

### Using `in` Operator

```js
let person = {
    name: 'Fiona',
    age: 22
};

console.log('name' in person);  // true
console.log('city' in person);  // false
```

### Using `hasOwnProperty()`

```js
console.log(person.hasOwnProperty('name'));  // true
console.log(person.hasOwnProperty('city'));  // false
```

## 8. Iterating Over Object Properties

You can loop through an object's properties using a `for...in` loop.

```js
let person = {
    name: 'George',
    age: 50,
    city: 'Los Angeles'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
```

### Output:
```
name: George
age: 50
city: Los Angeles
```

## 9. Object Methods

### Object.keys()

Returns an array of the object's own property names.

```js
let car = {
    brand: 'Honda',
    model: 'Civic'
};

console.log(Object.keys(car));  // ['brand', 'model']
```

### Object.values()

Returns an array of the object's own property values.

```js
console.log(Object.values(car));  // ['Honda', 'Civic']
```

### Object.entries()

Returns an array of key-value pairs.

```js
console.log(Object.entries(car));  // [['brand', 'Honda'], ['model', 'Civic']]
```

## 10. Object Destructuring

You can extract properties from an object and assign them to variables using **destructuring**.

```js
let person = {
    name: 'Harry',
    age: 35,
    city: 'San Francisco'
};

let { name, age, city } = person;

console.log(name);  // Harry
console.log(age);   // 35
console.log(city);  // San Francisco
```

## Summary

Objects in JavaScript are a fundamental part of the language. They allow you to store and manipulate data in key-value pairs. Objects are dynamic and can be modified at runtime, allowing for flexibility when managing data.

Key operations with objects include:
- Creating objects using literals or constructors
- Accessing properties with dot or bracket notation
- Modifying, adding, and deleting properties
- Using methods like `Object.keys()`, `Object.values()`, and `Object.entries()` to work with object properties



### For more information about Objects in JavaScript, visit: 
> - [MDN Web Docs](https://www.w3schools.com/js/js_objects.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=1Rhdtq5pYoY&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=59)